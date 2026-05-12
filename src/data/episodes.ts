// Source: /docs/03-season-one-episodes.md, /docs/04-season-two-episodes.md.
// One-line synopses follow the reference implementation (/docs/07).

export interface Episode {
  number: string;
  title: string;
  synopsis: string;
}

export interface Season {
  number: 'One' | 'Two';
  year: number;
  title: string;
  summary: string;
  episodes: Episode[];
}

export const seasons: Season[] = [
  {
    number: 'One',
    year: 2027,
    title: 'The Circuit',
    summary:
      'Eight episodes following the year on the road. Wellington, Wellington Nations Cup, the Atlantic crossing, CHIO Aachen, the Hampton Classic, Spruce Meadows, and CHI Geneva. The audience meets the cast, learns the world, and watches the rivalries take shape — with the Olympic year now visible on the horizon.',
    episodes: [
      {
        number: '01',
        title: 'Wellington',
        synopsis: 'The migration begins. The world is introduced.',
      },
      {
        number: '02',
        title: 'Bloodlines',
        synopsis: 'The heirs prove they belong.',
      },
      {
        number: '03',
        title: 'The Match',
        synopsis: 'Where the real money lives — the global horse trade.',
      },
      {
        number: '04',
        title: 'The Crossing',
        synopsis: 'The Atlantic migration. The grooms who travel with the horses.',
      },
      {
        number: '05',
        title: 'Aachen',
        synopsis: 'The Americans on the world’s most iconic grass arena.',
      },
      {
        number: '06',
        title: 'Hamptons',
        synopsis: 'The sport at the center of American cultural life.',
      },
      {
        number: '07',
        title: 'Rockies',
        synopsis: 'The rising generation under pressure at Spruce Meadows.',
      },
      {
        number: '08',
        title: 'Geneva',
        synopsis: 'The first explicit conversations about Los Angeles.',
      },
    ],
  },
  {
    number: 'Two',
    year: 2028,
    title: 'Road to Los Angeles',
    summary:
      'Eight episodes. Same characters, narrowing focus. Selection trials. Partnerships under pressure. Injuries, withdrawals, last-minute substitutions. The finale is the 2028 Los Angeles Olympic Games at Galway Downs, California — the first home Olympics for American equestrians in forty-four years.',
    episodes: [
      {
        number: '01',
        title: 'Election Year',
        synopsis: 'Robert Ridland opens the selection process.',
      },
      {
        number: '02',
        title: 'Inheritance',
        synopsis: 'The rising generation auditions for the team.',
      },
      {
        number: '03',
        title: 'Two Flags',
        synopsis: 'The international selection. Egypt. Israel. The marriages between flags.',
      },
      {
        number: '04',
        title: 'The European Summer',
        synopsis: 'The last audition. Aachen as final observation.',
      },
      {
        number: '05',
        title: 'The List',
        synopsis: 'Three riders are named. Some lives change. Some careers end.',
      },
      {
        number: '06',
        title: 'The Horses',
        synopsis: 'The four-legged athletes in the final weeks before the Games.',
      },
      {
        number: '07',
        title: 'Los Angeles',
        synopsis: 'Arrival at Galway Downs. The opening ceremony.',
      },
      {
        number: '08',
        title: 'Gold',
        synopsis:
          'The Olympic show jumping competition. The first American home Games for the sport since 1984.',
      },
    ],
  },
];
