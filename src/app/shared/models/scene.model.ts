export interface Scene {
  id: string; // e.g., "03_sadasiva"
  act: string; // e.g., "Act I"
  title: string;
  setting: string;
  characters: { name: string; role: string }[];
  mood: string;
  conflict: string;
  song: {
    title: string;
    translation?: string;
    structure?: string;
    style?: string;
    key_lyrics?: string[];
  };
  tattvas?: string[]; // e.g., ["siva", "sakti"]
  tags?: string[];
  notes?: string;
}
