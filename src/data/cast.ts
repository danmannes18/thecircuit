export type CastGroupId = "legends" | "heirs" | "rising" | "powerbrokers";
export type Discipline = "show-jumping" | "dressage" | "eventing" | "institutional";

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
  discipline: Discipline;
  keyHorse?: string;
  instagram?: string;   // handle only, e.g. "mclainward.official"
  wikipedia?: string;   // full URL
}

export interface CastGroup {
  id: CastGroupId;
  numeral: string;
  name: string;
  subtitle: string;
}

export const castGroups: CastGroup[] = [
  {
    id: "legends",
    numeral: "I",
    name: "The Legends",
    subtitle: "The working professionals and discipline giants. They've already won.",
  },
  {
    id: "heirs",
    numeral: "II",
    name: "The Heirs",
    subtitle: "Born into something extraordinary. Now proving they belong on their own terms.",
  },
  {
    id: "rising",
    numeral: "III",
    name: "The Rising",
    subtitle: "The next generation across all three disciplines — whose Olympic timeline is genuinely open right now.",
  },
  {
    id: "powerbrokers",
    numeral: "IV",
    name: "The Power Brokers",
    subtitle: "The people who shape the sport from outside the ring.",
  },
];

export const cast: CastMember[] = [
  // ── GROUP I: THE LEGENDS ─────────────────────────────────────────────────
  // Show Jumping
  {
    id: "ward",
    number: "01",
    name: "McLain Ward",
    role: "The Elder Statesman",
    home: "Brewster, New York / Wellington, Florida",
    achievements: "Six-time Olympian · Two team golds, three team silvers · Former world #1",
    bio: [
      "Brewster, New York / Wellington, Florida. Six-time Olympian. Two team golds, three team silvers. Former world number one. Operates Castle Hill Farm with his wife Lauren (former professional rider) and their two daughters. Trained by his late father Barney Ward, who served prison time in the 1990s for an insurance-fraud horse-killing scheme — a backstory that sits inside every shot of Castle Hill. Lillie Keenan trains out of his barn. The McKeever family (groom Lee, his wife Erica, their kids) has worked at Castle Hill for 30+ years.",
      "McLain is the Roger Federer of American show jumping — quietly intense, monastic in his discipline, a perfectionist who has aged into a mentor. In 2026 he withdrew from the World Cup Final with a minor injury and his protégée Lillie Keenan replaced him; the symbolism was not lost on anyone in the sport.",
    ],
    narrativeFunction: "The elder statesman, possibly competing in his seventh Olympics. The audience's first emotional door into the sport.",
    group: "legends",
    discipline: "show-jumping",
    instagram: "mclainward.official",
    wikipedia: "https://en.wikipedia.org/wiki/McLain_Ward",
  },
  {
    id: "farrington",
    number: "02",
    name: "Kent Farrington",
    role: "The World Number One",
    home: "Wellington, Florida",
    achievements: "2026 FEI World Cup Champion · World #1",
    bio: [
      "Wellington, Florida. Won the 2026 FEI World Cup Final in Fort Worth. Self-made, no horse-family pedigree — grew up middle-class in Chicago, started riding late by elite standards, built TeamKPF from nothing. The most analytical, cerebral program in the world. Famously private, famously meticulous, famously not in the business of being likable for cameras. The Bjorn Borg to Ward's Federer. His partnership with Greya won him the 2026 World Cup Final.",
    ],
    narrativeFunction: "The self-made champion. The counterweight to every billionaire's child in this cast.",
    group: "legends",
    discipline: "show-jumping",
    keyHorse: "Greya",
    instagram: "teamkpf",
    wikipedia: "https://en.wikipedia.org/wiki/Kent_Farrington",
  },
  {
    id: "kraut",
    number: "03",
    name: "Laura Kraut",
    role: "The Matriarch",
    home: "Royal Palm Beach, Florida",
    achievements: "Olympic team gold (2008) · team silver (2024) · oldest US woman to medal since 1904",
    bio: [
      "Royal Palm Beach, Florida. Olympic team gold (Beijing 2008), team silver (Paris 2024) — won silver at 58, the oldest US woman to medal at the Olympics since 1904. Long-time mentor to Jessica Springsteen. Married to British Olympic gold medalist Nick Skelton. Warm, candid, generous with younger riders.",
    ],
    narrativeFunction: "The matriarch. The audience falls in love with her in episode one.",
    group: "legends",
    discipline: "show-jumping",
    instagram: "laurakraut",
    wikipedia: "https://en.wikipedia.org/wiki/Laura_Kraut",
  },
  {
    id: "cook",
    number: "04",
    name: "Karl Cook",
    role: "The Bridge",
    home: "Rancho Santa Fe, California",
    achievements: "Olympic team silver (Paris 2024)",
    bio: [
      "Rancho Santa Fe, California. Olympic team silver (Paris 2024). Son of Intuit founder Scott Cook. Married to actress Kaley Cuoco. Operates Pomponio Ranch in California. Has straddled three worlds — Silicon Valley wealth, Hollywood celebrity, and elite professional sport — without losing his standing among the working pros. He could have been an heir; he chose to be a professional. His Paris medal was earned on merit.",
    ],
    narrativeFunction: "The bridge character. Proof that the lines between camps are blurrier than they look.",
    group: "legends",
    discipline: "show-jumping",
    instagram: "mrtankcook",
    wikipedia: "https://en.wikipedia.org/wiki/Karl_Cook",
  },
  // Dressage
  {
    id: "werth",
    number: "05",
    name: "Isabell Werth",
    role: "The Greatest Alive",
    home: "Rheinberg, Germany",
    achievements: "More Olympic medals than any equestrian in history · World #3 · Seven Olympics",
    bio: [
      "Rheinberg, Germany. The greatest dressage rider alive. More Olympic medals than any equestrian in history. Currently ranked World #3 on her mare Wendy de Fontaine. In her 50s and still winning at the highest level. Has competed at seven Olympics. An almost mythological figure — the Serena Williams of her discipline.",
    ],
    narrativeFunction: "The historical weight of what the sport can produce at its highest. What does it mean to still be the best at 55?",
    group: "legends",
    discipline: "dressage",
    keyHorse: "Wendy de Fontaine",
    wikipedia: "https://en.wikipedia.org/wiki/Isabell_Werth",
  },
  {
    id: "dufour",
    number: "06",
    name: "Cathrine Laudrup-Dufour",
    role: "The Soul Partner",
    home: "Denmark",
    achievements: "World #1 (April 2026) · Largest leap to #1 in ranking history",
    bio: [
      "World #1 as of April 2026 on her 17-year-old Hanoverian mare Mount St John Freestyle — made the largest leap to number one in ranking history (from 25th). Calls Freestyle her \"soul partner.\" Open about the spiritual dimension of the work between horse and rider. This is almost certainly Freestyle's final Olympic cycle.",
    ],
    narrativeFunction: "The mare and the Dane. One of the most emotionally charged partnerships in the sport, on its final countdown.",
    group: "legends",
    discipline: "dressage",
    keyHorse: "Mount St John Freestyle",
    wikipedia: "https://en.wikipedia.org/wiki/Cathrine_Laudrup-Dufour",
  },
  {
    id: "fry",
    number: "07",
    name: "Charlotte Fry",
    role: "The Heir to the Throne",
    home: "United Kingdom",
    achievements: "Former World #1 · Charlotte Dujardin protégée",
    bio: [
      "Former World #1. Rides Glamourdale — a black stallion with electric movement, fan-favorite, one of the most photogenic dressage horses on earth. Charlotte Dujardin protégée. The British dressage scene now runs through her.",
    ],
    narrativeFunction: "The heir to a throne. What it means to carry a lineage in a discipline where precision is everything.",
    group: "legends",
    discipline: "dressage",
    keyHorse: "Glamourdale",
    wikipedia: "https://en.wikipedia.org/wiki/Charlotte_Fry",
  },
  // Eventing
  {
    id: "martin",
    number: "08",
    name: "Boyd Martin",
    role: "The American Comeback",
    home: "Windurra USA, Coatesville, Pennsylvania",
    achievements: "World #1 (mid-2025) · First American at #1 in 21 years · Australian-born, naturalized American",
    bio: [
      "Windurra USA, Coatesville, Pennsylvania. World #1 in eventing as of mid-2025 — the first American at number one in 21 years. Australian-born, naturalized American. Wife Silva is a top dressage rider; their son rides. After Liz Halliday's career-ending 2024 accident, Boyd inherited several of her top horses — including Miks Master C — a storyline with deep emotional charge: riding the horses of someone who can no longer compete.",
    ],
    narrativeFunction: "The American comeback in eventing. The question of what we owe to those who can no longer compete.",
    group: "legends",
    discipline: "eventing",
    keyHorse: "Miks Master C",
    instagram: "boydmartineventing",
    wikipedia: "https://en.wikipedia.org/wiki/Boyd_Martin_(equestrian)",
  },
  {
    id: "jung",
    number: "09",
    name: "Michael Jung",
    role: "The Gold Standard",
    home: "Germany",
    achievements: "Triple Olympic gold medalist · fischerChipmunk FRH #1 ranked eventing horse in the world",
    bio: [
      "Triple Olympic gold medalist. Quietly the most decorated eventing rider of his generation. His horse fischerChipmunk FRH is currently the number-one ranked eventing horse in the world. Methodical, precise, almost without ego. The German model of a horseman.",
    ],
    narrativeFunction: "The gold standard against which all others in his discipline are measured.",
    group: "legends",
    discipline: "eventing",
    keyHorse: "fischerChipmunk FRH",
    wikipedia: "https://en.wikipedia.org/wiki/Michael_Jung_(equestrian)",
  },
  {
    id: "mcewen",
    number: "10",
    name: "Tom McEwen",
    role: "The British Standard",
    home: "United Kingdom",
    achievements: "Held world #1 through 2024–2025 · Olympic individual silver, Tokyo · European bronze 2025",
    bio: [
      "Held world number one for over a year through 2024–2025. Olympic individual silver in Tokyo on Toledo de Kerser. His horse JL Dublin is a fan favorite. European Eventing Championship bronze 2025.",
    ],
    narrativeFunction: "The British eventing establishment at the peak of its current generation.",
    group: "legends",
    discipline: "eventing",
    keyHorse: "JL Dublin",
    wikipedia: "https://en.wikipedia.org/wiki/Tom_McEwen_(equestrian)",
  },

  // ── GROUP II: THE HEIRS ──────────────────────────────────────────────────
  {
    id: "springsteen",
    number: "11",
    name: "Jessica Springsteen",
    role: "The Silver Medalist",
    home: "Colts Neck, NJ & Wellington",
    achievements: "Olympic team silver (Tokyo 2020) · Duke graduate",
    bio: [
      "Olympic silver, Tokyo 2020. Duke grad. Daughter of Bruce Springsteen and Patti Scialfa. Trains with Edwina Tops-Alexander. Grew up on Stone Hill Farm, Colts Neck, NJ. Her main horse: Don Juan van de Donkhoeve, her Tokyo partner — now aging. Long-time mentee of Laura Kraut.",
    ],
    narrativeFunction: "The rider who arrived in a famous world and chose a different one.",
    group: "heirs",
    discipline: "show-jumping",
    keyHorse: "Don Juan van de Donkhoeve",
    instagram: "jessicaspringsteen",
    wikipedia: "https://en.wikipedia.org/wiki/Jessica_Springsteen",
  },
  {
    id: "jobs",
    number: "12",
    name: "Eve Jobs",
    role: "The New Generation",
    home: "Palo Alto & Wellington",
    achievements: "Stanford history graduate · Models for Glossier · Recently married Harry Charles",
    bio: [
      "Steve and Laurene Powell Jobs' youngest daughter. Stanford history grad. Recently married British Olympian Harry Charles. Models for Glossier alongside competing. Her career-defining horse: Venue d'Fees des Hazalles — \"the best thing that has happened to me,\" now in her late teens.",
    ],
    narrativeFunction: "Second-gen wealth meets genuine Olympic ambition — and the particular complexity of that combination.",
    group: "heirs",
    discipline: "show-jumping",
    keyHorse: "Venue d'Fees des Hazalles",
    instagram: "evejobs",
    wikipedia: "https://en.wikipedia.org/wiki/Eve_Jobs",
  },
  {
    id: "gates",
    number: "13",
    name: "Jennifer Gates Nassar",
    role: "The Dynastic Marriage",
    home: "New York, Wellington & Cairo",
    achievements: "Stanford MD · Married Egyptian Olympian Nayel Nassar · Two Olympic flags, one household",
    bio: [
      "Daughter of Bill Gates and Melinda French Gates. Married Egyptian Olympian Nayel Nassar — two Olympic flags in one household. Works in medicine alongside competing. Her presence (and Nayel's) creates one of the show's most complex dual-flag storylines heading into LA28.",
    ],
    narrativeFunction: "The dynastic marriage. Two nations, one roof, one Olympic year.",
    group: "heirs",
    discipline: "show-jumping",
    instagram: "drjenngates",
  },
  {
    id: "bloomberg",
    number: "14",
    name: "Georgina Bloomberg",
    role: "The Conscience",
    home: "New York City",
    achievements: "20+ years international · welfare advocate · author",
    bio: [
      "Daughter of Michael Bloomberg. Has competed internationally for years while raising a son. Older than the other heirs, more experienced, less in need of proving anything — which makes her the group's moral anchor.",
    ],
    narrativeFunction: "The conscience of the heirs. What you become when the proving-yourself phase is already behind you.",
    group: "heirs",
    discipline: "show-jumping",
    instagram: "georginabloomberg",
    wikipedia: "https://en.wikipedia.org/wiki/Georgina_Bloomberg",
  },
  {
    id: "hank",
    number: "15",
    name: "Carlos Hank Guerreiro",
    role: "The Global Heir",
    home: "Belgium / Mexico",
    achievements: "Paris 2024 Olympian · H5 family team · married to Belgian rider Zoé Conter",
    bio: [
      "Paris 2024 Olympian. Grandson of one of Mexico's most powerful business dynasties (grandfather Carlos Hank Rhon, father Carlos Hank González). Based in Belgium, married to Belgian rider Zoe Conter. The H5 family operation includes his father and sister also competing. Mexico fields a famously passionate national team; he has competed alongside his best friends since childhood.",
    ],
    narrativeFunction: "The global heir. The show is not just an American story — this family proves it.",
    group: "heirs",
    discipline: "show-jumping",
    instagram: "carloshankg",
  },

  // ── GROUP III: THE RISING ────────────────────────────────────────────────
  // Show Jumping
  {
    id: "keenan",
    number: "16",
    name: "Lillie Keenan",
    role: "The Protégée",
    home: "New York City & Wellington",
    achievements: "Most decorated junior rider of her era · Trains at Castle Hill under McLain Ward",
    bio: [
      "New York City. The most decorated junior rider of her era (Maclay, USEF Medal, Hunter Derby Finals at 14). Trains at Castle Hill under McLain Ward. Anchored the 2025 US team at Aachen with the only double-clear. Her main horses: Argan de Beliard (steady veteran) and Kick On (younger stallion, still learning).",
    ],
    narrativeFunction: "The protégée. Trained inside the legacy she is being asked to carry forward.",
    group: "rising",
    discipline: "show-jumping",
    instagram: "lillieckeenan",
    wikipedia: "https://en.wikipedia.org/wiki/Lillie_Keenan",
    keyHorse: "Argan de Beliard",
  },
  {
    id: "moggre",
    number: "17",
    name: "Brian Moggre",
    role: "The Hometown Hero",
    home: "Texas & Wellington",
    achievements: "ASPCA Maclay reserve champion · Multiple FEI grand prix wins",
    bio: [
      "Texas. Young, electric. ASPCA Maclay reserve champion. Multiple FEI grand prix wins on MTM Vivre Le Reve. The working-class next-gen American answer to Ward and Farrington.",
    ],
    narrativeFunction: "The rider who arrived without family money and is outrunning people who had it.",
    group: "rising",
    discipline: "show-jumping",
  },
  {
    id: "gochman",
    number: "18",
    name: "Mimi Gochman",
    role: "The Phenom",
    home: "New York & Wellington",
    achievements: "Top-level junior and amateur competitor pushing toward the international circuit",
    bio: [
      "Young American competitor with deep equestrian family roots. Competing at the top level of the junior and amateur world, pushing toward the international circuit.",
    ],
    narrativeFunction: "The long shot whose family has invested everything in giving her this moment.",
    group: "rising",
    discipline: "show-jumping",
    instagram: "mimi.gochman",
  },
  {
    id: "vogel",
    number: "19",
    name: "Richard Vogel",
    role: "The European Champion",
    home: "Pfungstadt, Germany",
    achievements: "Reigning European Champion · World top 10",
    bio: [
      "World top 10. Lost his mother at 12; horses became his connection to her. Partners with David Will in Pfungstadt. Reigning European Champion. His horse United Touch S is one of the most electric jumpers in Europe right now.",
    ],
    narrativeFunction: "The grief behind the discipline. The rider for whom the sport is something deeper than competition.",
    group: "rising",
    discipline: "show-jumping",
    keyHorse: "United Touch S",
    instagram: "_richardvogel_",
  },
  {
    id: "bluman",
    number: "20",
    name: "Daniel Bluman",
    role: "The International",
    home: "Colombia / Israel",
    achievements: "Colombian-born, competes for Israel · MLSJ team champion two years running",
    bio: [
      "Colombian-born, competes for Israel. Major League Show Jumping team champion two years running (the Trelawny Trailblazers).",
    ],
    narrativeFunction: "The sport's international reach, made personal. Geopolitics in the warm-up ring.",
    group: "rising",
    discipline: "show-jumping",
  },
  // Dressage
  {
    id: "losos",
    number: "21",
    name: "Yvonne Losos de Muñiz",
    role: "The Ambassador",
    home: "Dominican Republic / Wellington",
    achievements: "Three-time Olympian for the DR (Rio, Tokyo, Paris) · Born in Nigeria",
    bio: [
      "Three-time Olympian for the DR (Rio, Tokyo, Paris). Born in Nigeria. Trains in Wellington and Europe. Proves the sport's geographic reach beyond its European and North American centers.",
    ],
    narrativeFunction: "The outsider who made it to the inside, on her own terms, for her own country.",
    group: "rising",
    discipline: "dressage",
    instagram: "yvonnedressage",
  },
  {
    id: "lyle",
    number: "22",
    name: "Adrienne Lyle",
    role: "The American Challenger",
    home: "Idaho",
    achievements: "Top-ranked American dressage rider · Qualified for 2026 World Cup Final on Helix",
    bio: [
      "Top-ranked American dressage rider. Qualified for the 2026 World Cup Final on Helix. Idaho roots. The quiet, technical Western answer to the European dressage establishment.",
    ],
    narrativeFunction: "The American challenger in a discipline dominated by Europe.",
    group: "rising",
    discipline: "dressage",
    keyHorse: "Helix",
  },
  // Eventing
  {
    id: "ingham",
    number: "23",
    name: "Yasmin Ingham",
    role: "The World Champion",
    home: "United Kingdom",
    achievements: "2022 World Champion at 25 · on Banzai du Loir",
    bio: [
      "2022 World Champion at 25, on Banzai du Loir. Young, world champion, carrying the weight of expectation.",
    ],
    narrativeFunction: "What it looks like to peak at 25 in a sport where riders compete at 55.",
    group: "rising",
    discipline: "eventing",
    keyHorse: "Banzai du Loir",
  },
  {
    id: "collett",
    number: "24",
    name: "Laura Collett",
    role: "The Comeback",
    home: "United Kingdom",
    achievements: "Paris 2024 team gold · survived near-fatal accident at 21",
    bio: [
      "Paris 2024 team gold, on London 52. Survived a near-fatal accident at 21 that left her in a medically induced coma; lost sight in one eye. Her comeback arc is one of the great unwritten stories in the sport.",
    ],
    narrativeFunction: "What you come back from. What the sport asks — and what it gives back.",
    group: "rising",
    discipline: "eventing",
    keyHorse: "London 52",
  },
  {
    id: "green",
    number: "25",
    name: "Cosby Green",
    role: "The Future",
    home: "United States",
    achievements: "Currently top-10 in the world",
    bio: [
      "Currently top-10 in the world. Young American eventer rising fast.",
    ],
    narrativeFunction: "The American future in a discipline the US is reclaiming.",
    group: "rising",
    discipline: "eventing",
  },
  // Next Wave
  {
    id: "eisner",
    number: "26",
    name: "Eloise Eisner",
    role: "The Climber",
    home: "New York City",
    achievements: "Top of the 2025 WIHS junior jumper field · Natural on-camera presence",
    bio: [
      "NYC-based junior rider, top of the 2025 WIHS junior jumper field. Natural on-camera presence.",
    ],
    narrativeFunction: "The climber. The \"in the climb right now\" character.",
    group: "rising",
    discipline: "show-jumping",
    instagram: "eloiseeisner_",
  },
  {
    id: "propp",
    number: "27",
    name: "The Propp Sisters",
    role: "The Siblings",
    home: "United States",
    achievements: "Stella, Juliette, Clara · run AJCS Treats together · share horses as they age out of divisions",
    bio: [
      "Three siblings — Stella, Juliette, Clara — all serious riders. Run a horse-treat business together (AJCS Treats). Share horses among themselves as they age out of divisions. Stella has aged into college; the younger two are still climbing. A naturally cinematic sibling dynamic with genuine competitive ambition behind it.",
    ],
    narrativeFunction: "The siblings. Three different timelines on the same ladder.",
    group: "rising",
    discipline: "show-jumping",
    instagram: "theproppponies",
  },
  {
    id: "wireman",
    number: "28",
    name: "Skylar Wireman",
    role: "The Prodigy",
    home: "California",
    achievements: "Won 2023 Longines FEI World Cup Fort Worth as a teenager · representing the US internationally",
    bio: [
      "California-based. Won the 2023 Longines FEI World Cup Fort Worth as a teenager. Already representing the US in international competition.",
    ],
    narrativeFunction: "The prodigy. The one who arrived early.",
    group: "rising",
    discipline: "show-jumping",
  },
  {
    id: "torano",
    number: "29",
    name: "JJ Torano",
    role: "The Hunter",
    home: "United States",
    achievements: "Multiple WIHS junior hunter championships, 2025",
    bio: [
      "Multiple WIHS junior hunter championships in 2025. The hunter-discipline counterweight to the jumper-heavy junior cast.",
    ],
    narrativeFunction: "The hunter world's next face.",
    group: "rising",
    discipline: "show-jumping",
  },
  {
    id: "bockmann",
    number: "30",
    name: "Calvin Böckmann",
    role: "The Young German",
    home: "Germany",
    achievements: "Top-20 in the world · on The Phantom of the Opera",
    bio: [
      "Young German eventer, top-20 in the world on The Phantom of the Opera. The European junior eventer answer.",
    ],
    narrativeFunction: "The European next wave in eventing.",
    group: "rising",
    discipline: "eventing",
    keyHorse: "The Phantom of the Opera",
  },

  // ── GROUP IV: THE POWER BROKERS ──────────────────────────────────────────
  {
    id: "ridland",
    number: "31",
    name: "Robert Ridland",
    role: "The Gatekeeper",
    home: "United States Equestrian Federation",
    achievements: "U.S. Chef d'Equipe, Show Jumping · former Olympic rider",
    bio: [
      "The man who decides who goes to the Olympics. His conversations with riders are the season's political spine. Former international competitor himself — he understands what he is asking of the people he judges.",
    ],
    narrativeFunction: "The gatekeeper. Every rider in groups I, II, and III is managing their relationship with this man.",
    group: "powerbrokers",
    discipline: "institutional",
    wikipedia: "https://en.wikipedia.org/wiki/Robert_Ridland",
  },
  {
    id: "tops",
    number: "32",
    name: "Jan Tops",
    role: "The European Impresario",
    home: "Valkenswaard, Netherlands",
    achievements: "Olympic gold (1992) · Founder, Longines Global Champions Tour",
    bio: [
      "The Dutch impresario who built the most glamorous circuit in the sport. His operation runs 15+ stops annually at iconic locations. His perspective opens the show's European wing in full.",
    ],
    narrativeFunction: "The architect of the modern circuit. Through him, we meet the sport's European establishment.",
    group: "powerbrokers",
    discipline: "institutional",
    wikipedia: "https://en.wikipedia.org/wiki/Jan_Tops",
  },
  {
    id: "ferder",
    number: "33",
    name: "Ilan Ferder",
    role: "The Matchmaker",
    home: "Wellington & Brewster, NY",
    achievements: "Founder, Ilan Ferder Stables · global horse trader",
    bio: [
      "The matchmaker. The man who moves million-dollar horses between continents and arranges the partnerships that make careers. Multilingual, well-connected, operates at the intersection of every financial conversation in show jumping.",
    ],
    narrativeFunction: "The matchmaker. The episode that shows where the money actually lives is built around him.",
    group: "powerbrokers",
    discipline: "institutional",
    instagram: "ilanferderstables",
  },
  {
    id: "shulman",
    number: "34",
    name: "Jill & Sydney Shulman",
    role: "The Operators",
    home: "Greenwich, CT & Wellington",
    achievements: "Back Country Farm, est. 1990 · Sydney competes for Team Israel",
    bio: [
      "Jill is one of the great working trainers, running a top-100 Longines ranking operation from the East Coast. Her daughter Sydney competes for Team Israel. The mother-daughter story at the heart of the professional trainer world — and a dual-flag subplot heading into LA28.",
    ],
    narrativeFunction: "The operators. The people who build the next generation while their own generation is still competing.",
    group: "powerbrokers",
    discipline: "institutional",
    instagram: "back_country_farm",
  },
  {
    id: "dignelli",
    number: "35",
    name: "Andre Dignelli",
    role: "The Academy",
    home: "Heritage Farm, Westchester, NY",
    achievements: "One of the most prestigious junior and equitation programs in America · where Lillie Keenan grew up",
    bio: [
      "One of the most prestigious junior and equitation programs in America. Where Lillie Keenan grew up. Where many of America's current top riders were made. The hidden engine of American show jumping talent development.",
    ],
    narrativeFunction: "The factory floor of American equestrian ambition.",
    group: "powerbrokers",
    discipline: "institutional",
  },
];

export function castByGroup(groupId: CastGroupId): CastMember[] {
  return cast.filter((m) => m.group === groupId);
}
