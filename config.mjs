export default [
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
    transformFields:
    {
      beta: () => true, // FXIME End does not fit
    },
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
      artist: artist => artist.replace(/[^a-z\s]/i, ''),
      gap: gap => gap - 1000,
      langauge: () => 'de',
    },
  },
  {
    vid: 'y1-z__vJi-0',
    name: 'Knorkator - Alter Mann',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 5000,
      langauge: () => 'de',
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
    transformFields:
    {
      videoend: () => 223,
      end: () => undefined,
    },
  },
  {
    vid: 'BHLA4QIKRRk',
    name: 'The Disco Boys - For You',
    transformFields:
    {
      beta: () => true, // FIXME Not matching
      language: () => 'en',
      gap: gap => gap - 500,
    },
  },
  {
    vid: 'X5kmM98iklo',
    name: 'Wir Sind Helden - Nur Ein Wort',
    transformFields:
    {
      beta: () => true, // FIXME: Stops in the middle and buffers for ever
    },
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
  {
    vid: 'xyNWUY-wH5g',
    name: 'Wir Sind Helden - Von Hier An Blind',
    encoding: 'latin1',
    transformFields:
    {
      videogap: () => 3,
      gap: gap => gap - 2200,
    },
  },
  {
    vid: 'erG5rgNYSdk',
    name: 'Weezer - Island In The Sun',
  },
  {
    vid: 'bx1Bh8ZvH84',
    name: 'Oasis - Wonderwall',
    transformFields:
    {
      videogap: () => 10,
      gap: gap => gap - 11000,
    },
  },
  {
    vid: 'tIdIqbv7SPo',
    name: 'Bill Withers - Ain\'t No Sunshine',
    transformFields:
    {
      beta: () => true, // FIXME Not matching
      gap: gap => gap - 900,
    },
  },
  {
    vid: 'oKOtzIo-uYw',
    name: 'Fugees - Killing me softly',
    transformFields:
    {
      beta: () => true, // FIXME: Stops in the middle and buffers for ever
      langauge: () => 'en',
    },
  },
  {
    vid: 'Soa3gO7tL-c',
    name: 'Green Day - Boulevard of broken dreams',
    transformFields:
    {
      bpm: bpm => bpm + 1,
      videogap: () => 27,
      gap: gap => gap - 900,
      langauge: () => 'en',
    },
  },
  {
    vid: 'IC8qPpnD0uE',
    name: 'Justin Timberlake - What Goes Around',
    transformFields:
    {
      beta: () => true, // FIXME End is not matching
      videogap: () => 9,
      gap: gap => gap - 18500,
      langauge: () => 'en',
    },
  },
  {
    vid: 'XPpTgCho5ZA',
    name: 'Maroon 5 - This Love',
    transformFields:
    {
      gap: gap => gap + 1000.4,
    },
  },
  {
    vid: 'bCDIt50hRDs',
    name: 'Fools Garden - Lemon Tree',
    transformFields:
    {
      gap: gap => gap + 760,
    },
  },
  {
    vid: 'BrPcg8y2-5E',
    name: 'Frank Zander - Hier kommt Kurt',
    encoding: 'latin1',
    transformFields:
    {
      beta: () => true, // FIXME Incomplete
    },
  },
  {
    vid: 'bxROkkm02AQ',
    name: 'Joachim Witt - Goldener Reiter',
    encoding: 'latin1',
  },
  {
    vid: '1V_xRb0x9aw',
    name: 'Gorillaz - Clint Eastwood',
    transformFields:
    {
      language: () => 'en',
      gap: gap => gap - 6000,
      beta: () => true, // FXIME End does not fit
    },
  },
  {
    vid: 'p3V1Rwatoug',
    name: 'Clueso - Kein Bock Zu Geh\'n',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 318,
    },
  },
  {
    vid: 'kRrP-bZvD2s',
    name: 'Die Aerzte - Deine Schuld',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 500,
    },
  },
  {
    vid: 'gWju37TZfo0',
    name: 'OutKast - Roses',
    transformFields:
    {
      videogap: () => 60,
      gap: gap => gap + 2000,
      beta: () => true, // FIXME Middle does not fit
    },
  },
  {
    vid: '_hOIBNZhWd8',
    name: 'Ohrbooten - Autobahn',
    encoding: 'latin1',
  },
  {
    vid: '-WNo6YdN8u0',
    name: 'Abel - Onderweg',
    transformFields:
    {
      videogap: () => 4,
      bpm: () => 100,
    },
  },
  {
    vid: 'C8uFwhgIdu8',
    name: 'De Kleine Zeemeermin - Diep In De Zee',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 11000,
    },
  },
  {
    vid: 'YkHP0661TiA',
    name: 'Die Ärzte - Zu spät',
    encoding: 'latin1',
    transformFields:
    {
      beta: () => true,
    },
  },
  {
    vid: 'LUlZ5n0cyak',
    name: 'Pokémon - Pokémon Theme (GER)',
    encoding: 'latin1',
    transformFields:
    {
      title: title => title.replace(' (GER)', ''),
    },
  },
  {
    vid: 'juXIi-_4OHU',
    name: 'Die Ärzte - Nur einen Kuss',
    encoding: 'latin1',
  },
  {
    vid: 'j6ZCRp3E--Q',
    name: 'Alligatoah - Trostpreis',
    encoding: 'latin1',
  },
  {
    vid: 'yMR45cZbvDw',
    name: 'Die Prinzen - Alles Nur Geklaut',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 2000,
    },
  },
  {
    vid: '8-bgiiTxhzM',
    name: 'Falco - Der Kommissar',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 530,
    },
  },
  {
    vid: '0m7bHdcq87o',
    name: 'Falco - Mutter der Mann mit dem Koks ist da',
    encoding: 'latin1',
    transformFields:
    {
      videogap: () => 6,
      gap: gap => gap - 560,
    },
  },
  {
    vid: 'ezQs0sB8Q0s',
    name: 'Die Prinzen - Ich wär so gerne Millionär',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap + 500,
    },
  },
  {
    vid: 'af59U2BRRAU',
    name: 'Rammstein - Rosenrot',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 90,
      videoend: () => 219,
    },
  },
  {
    vid: 'aC872j2-PDw',
    name: 'Wir Sind Helden - Denkmal',
  },
  {
    vid: 'VS4fyxuFZvA',
    name: 'Xavier Naidoo - Dieser Weg',
    encoding: 'latin1',
  },
  {
    vid: '4pBo-GL9SRg',
    name: 'Nelly Furtado - All Good Things',
    transformFields:
    {
      gap: gap => gap - 600,
      bpm: bpm => bpm - 1,
      beta: () => true,
    },
  },
  {
    vid: 'fuLPJg2gwjQ',
    name: 'Oomph! - Augen auf',
    transformFields:
    {
      gap: gap => gap + 100,
    },
  },
  {
    vid: 'wV1FrqwZyKw',
    name: 'Lady GaGa - Born This Way',
    transformFields:
    {
      videogap: () => 152,
      gap: gap => gap + 1200,
      bpm: bpm => bpm - 2,
      beta: () => true, // FIXME Text ist zu schnell
    },
  },
  {
    vid: 'CX01x81SmWQ',
    name: 'Culcha Candela - Hamma',
    transformFields:
    {
      gap: () => 2000,
    }
  },
  {
    vid: 'FklUAoZ6KxY',
    name: 'Weird Al Yankovic - Smells Like Nirvana',
    transformFields:
    {
      gap: gap => gap - 144,
    }
  },
  {
    vid: 'OMaycNcPsHI',
    name: 'Placebo - Every You Every Me',
    transformFields:
    {
      gap: gap => gap + 300,
    }
  },
  {
    vid: 'eVTXPUF4Oz4',
    name: 'Linkin Park - In the end',
  },
  {
    vid: 'v2H4l9RpkwM',
    name: 'Linkin Park - Breaking The Habit',
    transformFields:
    {
      gap: gap => gap + 800,
    }
  },
  {
    vid: 'JrRwj45dtcI',
    name: '2raumwohnung - Wir Werden Sehen',
    encoding: 'latin1',
    transformFields:
    {
      videogap: () => 8,
      gap: gap => gap + 1000,
    }
  },
  {
    vid: '8A0-uYB98zo',
    name: 'Ohrbooten - Man Lebt Nur Einmal',
    encoding: 'latin1',
  },
  {
    vid: 's4gqpxjakhQ',
    name: 'Ohrbooten - Bewegung',
  },
  {
    vid: 'CcCw1ggftuQ',
    name: 'Flo Rida - Right Round',
    transformFields:
    {
      videogap: () => 7,
      gap: gap => gap - 6000,
    }
  },
  {
    vid: 'kPMRkQK2szI',
    name: 'Grossstadtgeflüster - Fickt-Euch-Allee',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 100,
    }
  },
  {
    vid: '1AOp9c5DRzc',
    name: 'Flogging Molly - If I Ever Leave This World Alive',
  },
  {
    vid: 'JMtmBGBxXVc',
    name: 'Die Schröders - Lass uns schmutzig Liebe machen',
    encoding: 'latin1',
    transformFields:
    {
      beta: () => true,
    }
  },
  {
    vid: 'mzgPTQUY6B4',
    name: 'Monsters of Liedermaching - Blasenschwäche',
    encoding: 'latin1',
  },
  {
    vid: 'iK-1oGphELM',
    name: 'Die Ärzte - Junge',
    encoding: 'latin1',
    transformFields:
    {
      videogap: () => 9.5,
      gap: gap => gap - 4000,
    }
  },
  {
    vid: 'MRtuPB5p7nQ',
    name: 'Die Ärzte - Rebell',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap + 1500,
    }
  },
  {
    vid: 'G-NrSn3K6gM',
    name: 'Die Ärzte - Westerland',
    encoding: 'latin1',
    transformFields:
    {
      bpm: bpm => bpm + 1,
    }
  },
  {
    vid: 'W3q8Od5qJio',
    name: 'Rammstein - Du Hast',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 500,
    }
  },
  {
    vid: 'PBvwcH4XX6U',
    name: 'Rammstein - Mein Teil',
    encoding: 'latin1',
    transformFields:
    {
      gap: gap => gap - 1000,
      bpm: bpm => bpm - 1,
      beta: () => true,
    }
  },
  {
    vid: '_yWU0lFghxU',
    name: 'Seeed - Ding',
  },
  {
    vid: 'E6cosC_QHNo',
    name: 'Seeed - Schwinger',
    encoding: 'latin1',
    transformFields:
    {
      beta: () => true,
    }
  },
  {
    vid: 'XXlZfc1TrD0',
    name: 'Die Antwoord - Banana Brain',
    encoding: 'latin1',
    transformFields:
    {
      bpm: bpm => bpm - 1,
      beta: () => true,
    }
  },
];