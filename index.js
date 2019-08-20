const { promises: { readFile, writeFile } } = require('fs');
const files = require('./config');

const metaRegExpStr = '#(?<key>[a-z]+):(?<value>.+)';
const metaRowRegExp = new RegExp(metaRegExpStr, 'gi');
const metaRegExp = new RegExp(metaRegExpStr, 'i');
const ignoreKeys = /^(cover|video|encoding)$/i;
const numberKeys = /^(bpm|gap|year|end|videogap)$/i;

const songRegExpStr = '(?<type>[:*F-])\\s(?<bpm_start>[0-9]+)(\\s(?<bpm_length>[0-9]+)\\s(?<pitch>[0-9-]+)\\s(?<text>.+))?';
const songRowRegExp = new RegExp(songRegExpStr, 'g');
const songRegExp = new RegExp(songRegExpStr);

const metaDataReducer = (result, row) =>
{
  let { key, value } = row.match(metaRegExp).groups;

  if (ignoreKeys.test(key)) return result;

  if (numberKeys.test(key))
  {
    value = parseFloat(value);
  }

  if (/language/i.test(key))
  {
    value = languageMap[value];
  }

  return {
    ...result,
    [key.toLowerCase()]: value,
  };
};

const typeMapping = {
  ':': 1, // 'REGULAR',
  '*': 2, // 'GOLDEN',
  'F': 0, // 'FREESTYLE',
};

const languageMap = {
  German: 'de',
  English: 'en',
};

const convert = files.map(async file =>
{
  const content = await readFile(`./src/${file.name}.txt`, file.encoding || 'utf8');
  const contentStr = content.toString();
  const meta = contentStr.match(metaRowRegExp).reduce(metaDataReducer, {});
  const bpmToMs = bpm => Math.round((250 / meta.bpm * 60) * parseInt(bpm, 10) * 100) / 100;
  const song = [];
  let lastLine;

  if (/yes/i.test(meta.relative))
  {
    throw new Error('Parsing relative song files is not yet implemented!');
  }

  if (file.transformFields)
  {
    for (const [field, transform] of Object.entries(file.transformFields))
    {
      meta[field] = transform(meta[field]);
    }
  }

  contentStr.match(songRowRegExp).forEach((row) =>
  {
    const { type, bpm_start, bpm_length, pitch, text } = row.match(songRegExp).groups;
    const start = ((meta.videogap || 0) * 1000) + meta.gap + bpmToMs(bpm_start);
    const newLine = type === '-';

    if (!lastLine || newLine)
    {
      if (lastLine)
      {
        const linePitches = lastLine.syllables.map(syllable => syllable.pitch);
        lastLine.minPitch = Math.min(...linePitches);
        lastLine.maxPitch = Math.max(...linePitches);
        lastLine.end = start;
      }
      lastLine = { start, end: null, minPitch: null, maxPitch: null, syllables: [] };
      song.push(lastLine);
      if (newLine) return;
    }

    if (!lastLine.syllables.length && start - lastLine.start > 1000) {
      lastLine.start = start;
    }

    lastLine.syllables.push({
      type: typeMapping[type],
      start,
      length: bpm_length && bpmToMs(bpm_length),
      pitch: pitch && parseInt(pitch, 10),
      text,
    });
  });

  const lastSyllable = lastLine.syllables[lastLine.syllables.length - 1];
  lastLine.end = lastSyllable.start + lastSyllable.length;

  console.log(meta);

  await writeFile(`./dist/songs/${file.vid}.json`, JSON.stringify(song, null, 2));

  return {
    id: file.vid,
    ...meta,
  };
});

Promise.all(convert).then(songs =>
{
  writeFile('./dist/songs.json',  JSON.stringify(songs, null, 2));
});