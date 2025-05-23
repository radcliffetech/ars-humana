export interface TattvaOpinion {
  id: string;
  description: string;
  tags: string[];
  positives: string;
  negatives: string;
  quote: {
    source: string;
    devanagari: string;
    iast: string;
    english: string;
  };
  group?: string; // Shudda, Shuddha, Shuddha-ashuddha
  sound?: string;
  symbol?: string;
  color?: string;
  archetype?: string;
  shadow?: string;
}
