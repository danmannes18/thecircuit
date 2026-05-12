// Episodes populated in Phase 2. Shape only for now.

export interface Episode {
  number: string;        // "01"
  title: string;
  synopsis: string;      // one line
}

export interface Season {
  number: 'One' | 'Two';
  year: number;
  title: string;
  summary: string;
  episodes: Episode[];
}

export const seasons: Season[] = [];
