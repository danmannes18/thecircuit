// Source: /docs/02-character-bible.md, with role descriptors and meta
// strips drawn from the reference implementation (/docs/07).

export type CastGroupId = 'legends' | 'heirs' | 'rising' | 'powerbrokers';

export interface CastMember {
  id: string;
  number: string;
  name: string;
  role: string;
  home: string;
  achievements: string;
  bio: string[];
  narrativeFunction: string;
  group: CastGroupId;
}

export interface CastGroup {
  id: CastGroupId;
  numeral: string;
  name: string;
  subtitle: string;
}

export const castGroups: CastGroup[] = [
  {
    id: 'legends',
    numeral: 'I',
    name: 'The Legends',
    subtitle: 'The working professionals. The audience’s emotional anchor.',
  },
  {
    id: 'heirs',
    numeral: 'II',
    name: 'The Heirs',
    subtitle: 'Born into the sport. Now proving they belong in it.',
  },
  {
    id: 'rising',
    numeral: 'III',
    name: 'The Rising',
    subtitle: 'Twenty-somethings carrying American show jumping into the next decade.',
  },
  {
    id: 'powerbrokers',
    numeral: 'IV',
    name: 'The Power Brokers',
    subtitle: 'The people who shape the sport from outside the ring.',
  },
];

export const cast: CastMember[] = [
  {
    id: 'ward',
    number: '01',
    name: 'McLain Ward',
    role: 'The Elder Statesman',
    home: 'Brewster, New York',
    achievements: '5× Olympian · 5 Olympic medals',
    bio: [
      'Five-time Olympian. Five Olympic medals across six Games — the only American show jumper of his generation to compete at that altitude for that long. Won team gold in Beijing 2008 with Sapphire, the partnership that made him a household name inside the sport. Silver in Rio, Tokyo, and Paris.',
      'McLain is the Roger Federer of American show jumping — quietly intense, almost monastic in his discipline, a perfectionist who has aged into a mentor. In 2026 he withdrew from the World Cup Final with a minor injury and his protégée Lillie Keenan replaced him; the symbolism was not lost on anyone in the sport. He is the bridge between the generation that built American show jumping and the one that will carry it to Los Angeles.',
    ],
    narrativeFunction:
      'The audience’s first emotional door into the sport. Possibly competing in his seventh Olympics.',
    group: 'legends',
  },
  {
    id: 'farrington',
    number: '02',
    name: 'Kent Farrington',
    role: 'The World Number One',
    home: 'Wellington, Florida',
    achievements: '2026 FEI World Cup Champion · World #1',
    bio: [
      'World number one. The most decorated American show jumper currently competing. Won the 2026 FEI World Cup Final in Fort Worth and won again in Kentucky the following week — the kind of streak that defines a career.',
      'Farrington is the Cinderella story that the sport never advertises. He grew up middle-class in Chicago, started riding late by elite standards, and built one of the most analytical, cerebral programs in the world without family money or institutional support. He is famously private, famously meticulous, and famously not in the business of being likable for the cameras. Which is precisely why putting him on camera is a coup.',
    ],
    narrativeFunction:
      'The self-made champion. The counterweight to every billionaire’s child in this cast.',
    group: 'legends',
  },
  {
    id: 'kraut',
    number: '03',
    name: 'Laura Kraut',
    role: 'The Matriarch',
    home: 'Royal Palm Beach, Florida',
    achievements: 'Olympic team gold (2008) · silver (2024)',
    bio: [
      'Olympic team gold (Beijing 2008), team silver (Paris 2024). The only female rider currently in the world top ten. Won her first international title nearly forty years ago and is still winning at the highest level today.',
      'Kraut is married to Nick Skelton — the British rider who won individual Olympic gold in Rio at age 58 — and the two of them live a life that is essentially a moving conversation about horses. She is the most accessible of the legends: warm, candid, generous with younger riders. If McLain is the monk and Kent is the technician, Laura is the heart.',
    ],
    narrativeFunction:
      'The matriarch. The audience falls in love with her in episode one.',
    group: 'legends',
  },
  {
    id: 'cook',
    number: '04',
    name: 'Karl Cook',
    role: 'The Bridge',
    home: 'Rancho Santa Fe, California',
    achievements: 'Olympic team silver (Paris 2024)',
    bio: [
      'Olympic team silver (Paris 2024). Son of Intuit founder Scott Cook. Married to actress Kaley Cuoco. Has straddled three worlds — Silicon Valley wealth, Hollywood celebrity, and elite professional sport — without ever losing his standing among the working pros.',
      'Karl is positioned uniquely in this ensemble: he could have been an heir, but he chose to be a professional. He has earned his Olympic spot through results, and his Paris medal was won on merit, not lineage. His presence destabilizes the easy dichotomy between “legends” and “heirs” — and that ambiguity is exactly why he matters here.',
    ],
    narrativeFunction:
      'The bridge character. Proof that the lines between camps are blurrier than they look.',
    group: 'legends',
  },
  {
    id: 'springsteen',
    number: '05',
    name: 'Jessica Springsteen',
    role: 'The Olympic Silver Medalist',
    home: 'Colts Neck, NJ & Wellington',
    achievements: 'Tokyo 2020 team silver · Princeton',
    bio: [
      'Tokyo 2020 team silver medalist. Princeton graduate. Daughter of Bruce and Patti Scialfa.',
      'Springsteen is the heir whose career most clearly justifies itself. She is a working international rider with a real Olympic medal, a long-running partnership with Don Juan Van De Donkhoeve, and a place in the U.S. selection conversation that has nothing to do with her last name. But of course, the last name is also the show. The collision between the workmanlike daughter and the iconic father — the world’s most famous storyteller of working-class American life — is one of the richest texts in this entire cast.',
    ],
    narrativeFunction:
      'The most famous person in the sport. Also one of the most private.',
    group: 'heirs',
  },
  {
    id: 'jobs',
    number: '06',
    name: 'Eve Jobs',
    role: 'The Face of the New Generation',
    home: 'Palo Alto & Wellington',
    achievements: '5★ Grand Prix competitor · Stanford',
    bio: [
      'Stanford graduate. Top international show jumper. Model — runway for Coperni, campaigns for Glossier and Louis Vuitton. Daughter of Steve Jobs and Laurene Powell Jobs.',
      'Jobs is the most aesthetically photogenic figure in the sport, and she knows it. She also rides at the genuine top level — competing in 5★ Grand Prix classes alongside Olympians. Her storyline carries a particular gravity: her father shaped the modern world and is no longer here to see her ride. The presence of her mother Laurene at the ringside at major events is one of the more quietly affecting images in the sport.',
    ],
    narrativeFunction:
      'The face of the new generation. The visual hook for marketing.',
    group: 'heirs',
  },
  {
    id: 'gates',
    number: '07',
    name: 'Jennifer Gates Nassar',
    role: 'The Dynastic Marriage',
    home: 'New York, Wellington, Cairo',
    achievements: 'Grand Prix rider · Stanford MD',
    bio: [
      'Stanford medical degree. Mother of two. Married to Egyptian Olympic show jumper Nayel Nassar, whom she met in the sport.',
      'The Gates-Nassar marriage is the rare equestrian love story that played out entirely inside the circuit. Both are working Grand Prix riders. Nayel competes for Egypt — meaning their family is split across two Olympic teams, both heading to Los Angeles. Jennifer is reportedly stepping back from competition to focus on medicine and family, which makes the question of whether she rides at LA28 one of the quietly compelling threads of season two.',
    ],
    narrativeFunction:
      'The dynastic marriage. The window into the Middle Eastern wing of the sport.',
    group: 'heirs',
  },
  {
    id: 'bloomberg',
    number: '08',
    name: 'Georgina Bloomberg',
    role: 'The Conscience',
    home: 'New York City',
    achievements: '20+ years international · welfare advocate',
    bio: [
      'International show jumper for over twenty years. Author, philanthropist, animal welfare advocate. Daughter of Michael Bloomberg.',
      'Bloomberg is the elder stateswoman of the heirs — she has been doing this longer than most of the people on this list, and she has used her platform to push the sport toward genuine reform on horse welfare, retirement, and adoption. She is also a single mother and has been candid about the demands of campaigning a string of horses while raising a son. The combination — heiress, athlete, advocate, parent — gives her a maturity the rest of the heirs are still growing into.',
    ],
    narrativeFunction:
      'The conscience of the heirs. The character who articulates what this life actually costs.',
    group: 'heirs',
  },
  {
    id: 'keenan',
    number: '09',
    name: 'Lillie Keenan',
    role: 'The Protégée',
    home: 'New York & Wellington',
    achievements: 'World ranked top 30 · mentored by McLain Ward',
    bio: [
      'Twenty-nine years old. World ranked top thirty. Mentored by McLain Ward. Replaced McLain at the 2026 World Cup Final when he withdrew injured — a moment of dynastic transfer the sport noticed.',
      'Keenan was one of the most decorated junior equitation riders in American history, and she has done the hardest thing in the sport: successfully translated a junior career into a senior one. She is articulate, intellectually engaged, openly cross-trains in dressage to improve her show jumping. If McLain represents the past of American show jumping, Lillie represents the future the federation is consciously building toward.',
    ],
    narrativeFunction:
      'The most likely first-time Olympian on the LA28 team.',
    group: 'rising',
  },
  {
    id: 'moggre',
    number: '10',
    name: 'Brian Moggre',
    role: 'The Hometown Hero',
    home: 'Flower Mound, TX & Wellington',
    achievements: 'Maclay Final at 17 · World Cup at 19',
    bio: [
      'Mid-twenties. Won the Maclay Final at 17, the World Cup at 19. Has been the heir-apparent of American show jumping since he was a teenager.',
      'Moggre is the rare Texan in a sport dominated by the East Coast and California — and the rare working-class kid in a generation of heirs. His parents drove him to lessons. He earned his rides through results. Now he campaigns top horses owned by patrons like Ann Thompson, and his trajectory has been carefully managed by mentors who see him as the long-term future of the U.S. team.',
    ],
    narrativeFunction:
      'The character whose Olympic selection battle in 2028 will be the most emotional in the cast.',
    group: 'rising',
  },
  {
    id: 'gochman',
    number: '11',
    name: 'Mimi Gochman',
    role: 'The Phenom',
    home: 'New York & Wellington',
    achievements: 'Junior phenom · first years as professional',
    bio: [
      'Twenty-one years old. Daughter of Becky Gochman, one of the most successful patron-owners in American show jumping. Junior phenom, now in her first full years as a professional.',
      'Mimi is the youngest figure in the central cast. She is also the most direct test case for the show’s central tension: can a kid born inside the sport, with every advantage money can buy, become a great rider on her own merits? The honest answer is unknown — and watching her find out, in real time, with the LA Olympics as a backdrop, is one of the most compelling possible storylines in season two.',
    ],
    narrativeFunction:
      'The audience surrogate for the rising generation. Young enough to learn alongside the viewer.',
    group: 'rising',
  },
  {
    id: 'ridland',
    number: '12',
    name: 'Robert Ridland',
    role: 'The Gatekeeper',
    home: 'United States Equestrian Federation',
    achievements: 'U.S. Chef d’Equipe · former Olympic rider',
    bio: [
      'The U.S. Chef d’Equipe — the man who picks the American Olympic team. Former Olympic rider himself (Montreal 1976). Now in his second decade running American show jumping at the international level.',
      'Ridland is the most powerful person in this entire ecosystem and the least famous. He sits in a folding chair at the warm-up ring at every major American team event, watches every round, and ultimately decides whose career-defining year ends in Los Angeles and whose ends in disappointment. His selection process is partly objective — the Rolex/USEF rankings — and partly discretionary, which is to say political, which is to say dramatic.',
    ],
    narrativeFunction:
      'Every season-two episode about selection is, fundamentally, about him.',
    group: 'powerbrokers',
  },
  {
    id: 'tops',
    number: '13',
    name: 'Jan Tops',
    role: 'The European Impresario',
    home: 'Valkenswaard, Netherlands',
    achievements: 'Olympic gold (1992) · Founder, LGCT',
    bio: [
      'Olympic team gold (Barcelona 1992). Founder and president of the Longines Global Champions Tour. Married to Australian Olympic rider Edwina Tops-Alexander. Built the Tops International Arena outside Amsterdam — one of the most photographed venues in the sport.',
      'Tops is the closest thing equestrian has to a Bernie Ecclestone. He invented the most lucrative circuit in the sport, controls the calendar that the world’s top thirty riders structure their year around, and lives at the intersection of athlete, businessman, and king-maker. He is European, polished, and slightly mysterious. He is also one of the great untold stories of modern sport — a former champion who built a billion-dollar circuit on his own land.',
    ],
    narrativeFunction:
      'The European wing of the show. The character who explains, by his very existence, why this sport is bigger than the audience realizes.',
    group: 'powerbrokers',
  },
  {
    id: 'ferder',
    number: '14',
    name: 'Ilan Ferder',
    role: 'The Matchmaker',
    home: 'Wellington & Brewster, NY',
    achievements: 'Founder, Ilan Ferder Stables',
    bio: [
      'Israeli-born horse trader and trainer. Runs Ilan Ferder Stables. Among the most respected matchmakers in the global sport — the man wealthy clients call when they need an eight-figure horse and the right rider to put on it.',
      'Ferder represents an entire layer of the sport the public never sees: the dealers, the brokers, the people who scout horses in Belgian fields and Dutch barns and quietly transact them for fortunes. He is the closest thing the show has to a Ray Donovan figure — discreet, well-traveled, with relationships that go back decades on three continents. The story of any single great horse in this sport is, somewhere in its history, a story about a man like Ilan.',
    ],
    narrativeFunction:
      'The window into the global horse trade — where the real money lives.',
    group: 'powerbrokers',
  },
  {
    id: 'shulman',
    number: '15',
    name: 'Jill & Sydney Shulman',
    role: 'The Operators',
    home: 'Greenwich, CT & Wellington',
    achievements: 'Back Country Farm, est. 1990 · Israeli international team',
    bio: [
      'Jill Shulman is the founder of Back Country Farm, established in Greenwich in 1990, with a seasonal Wellington operation. Third-generation horsewoman — her own mother rode Saddlebreds in the Midwest. Trainer, barn owner, mother of four.',
      'Jill is the figure the cast was missing: the small-business operator who is the actual structural backbone of American show jumping. She does not ride at the Olympic level. She trains the riders who do. She buys the horses, imports them from Europe, develops them with junior and amateur clients, and produces a steady pipeline of decorated juniors who go on to the Maclay, the Medal, and beyond.',
      'Sydney Shulman, her daughter, competes internationally for Israel. She has been ranked in the top 100 of the Rolex/USEF list since turning professional and has CSI5★ wins in Major League Show Jumping. The mother-daughter dynamic — Jill the maker, Sydney the made — is one of the richest emotional throughlines available in the entire cast.',
    ],
    narrativeFunction:
      'The audience’s access to the day-to-day mechanics of running a top program. The show’s bridge between the elite circuit and the thousands of barns that feed it.',
    group: 'powerbrokers',
  },
];

export function castByGroup(groupId: CastGroupId): CastMember[] {
  return cast.filter((m) => m.group === groupId);
}
