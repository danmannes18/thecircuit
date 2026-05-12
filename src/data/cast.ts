// Cast bios populated in Phase 2. Shape only for now.

export type CastGroupId = 'legends' | 'heirs' | 'rising' | 'powerbrokers';

export interface CastMember {
  id: string;
  number: string;        // "01", "02" ...
  name: string;
  role: string;          // "The Elder Statesman"
  home: string;
  achievements: string;
  bio: string[];         // paragraphs
  narrativeFunction: string;
  group: CastGroupId;
}

export interface CastGroup {
  id: CastGroupId;
  numeral: string;       // "I"
  name: string;          // "The Legends"
  subtitle: string;
}

export const castGroups: CastGroup[] = [
  { id: 'legends', numeral: 'I', name: 'The Legends', subtitle: 'The working professionals.' },
  { id: 'heirs', numeral: 'II', name: 'The Heirs', subtitle: 'Born into the sport. Proving they belong in it.' },
  { id: 'rising', numeral: 'III', name: 'The Rising', subtitle: 'The next generation.' },
  { id: 'powerbrokers', numeral: 'IV', name: 'The Power Brokers', subtitle: 'The people who shape the sport from outside the ring.' },
];

export const cast: CastMember[] = [];
