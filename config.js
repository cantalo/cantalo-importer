module.exports = [
  {
    vid: 'dlvStoOyEzE',
    name: 'Alligatoah - Du bist schön',
    encoding: 'latin1',
  },
  {
    vid: 'LqDe5QeUjHY',
    name: 'Ohrbooten - An Alle Ladies',
    transformFields:
    {
      bpm: bpm => parseInt(bpm),
      gap: gap => gap - 5000,
      videogap: () => 10,
    },
  },
  {
    vid: 'WpYeekQkAdc',
    name: 'Black Eyed Peas - Where Is The Love',
  },
  {
    vid: 'K-IMNBCj15A',
    name: 'Annett Louisan - Das Gefühl',
    encoding: 'latin1',
  },
  {
    vid: 'F-NkI-W9PMQ',
    name: 'Frauenarzt & Manny Marc - Disco Pogo',
  },
  {
    vid: 'xz-w97l6pkU',
    name: 'Disney\'s Pocahontas - Das Farbenspiel des Winds',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 1000,
    },
  },
  {
    vid: 'y1-z__vJi-0',
    name: 'Knorkator - Alter Mann',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 5000,
    },
  },
  {
    vid: 'CSvFpBOe8eY',
    name: 'System Of A Down - Chop Suey',
    transformFields:
    {
      gap: gap => gap - 1000,
    },
  },
  {
    vid: 'opoDBF_b-fg',
    name: 'Alligatoah - Willst du',
    encoding: 'latin1',
  },
  {
    vid: 'BHLA4QIKRRk',
    name: 'The Disco Boys - For You',
    transformFields:
    {
      language: () => 'en',
      gap: gap => gap - 500,
    },
  },
  {
    vid: 'X5kmM98iklo',
    name: 'Wir Sind Helden - Nur Ein Wort',
  },
  {
    vid: 'xat1GVnl8-k',
    name: 'Bloodhound Gang - The bad touch',
    transformFields:
    {
      language: () => 'en',
      gap: gap => gap + 500,
    },
  },
];