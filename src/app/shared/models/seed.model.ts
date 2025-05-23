import { Realization } from './realization.model';
export interface Seed {
  id: string; // unique identifier
  label: string; // display name, e.g. "Vajra"
  description?: string; // optional rich text description
  type?: 'concept' | 'sound' | 'emotion' | 'gesture' | 'word' | 'unknown';
  tags?: string[]; // categorization or cross-referencing
  realizations?: Realization[]; // array of related media expressions
}
