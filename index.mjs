import { promises as fsAsync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import parser from '../parser/index.mjs';
import files from './config.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { readFile, writeFile } = fsAsync;

const convert = files.map(async file =>
{
  const content = await readFile(`${__dirname}/src/${file.name}.txt`, file.encoding || 'utf8');
  const contentStr = content.toString();
  const { song, ...meta } = parser(contentStr, file);

  console.log(meta);

  await writeFile(`${__dirname}/dist/songs/${file.vid}.json`, JSON.stringify(song, null, 2));

  return {
    id: file.vid,
    ...meta,
  };
});

Promise.all(convert).then(songs =>
{
  writeFile(__dirname + '/dist/songs.json',  JSON.stringify(songs, null, 2));
});