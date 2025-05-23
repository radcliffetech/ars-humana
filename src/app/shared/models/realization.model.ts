export interface Realization {
  id: string; // e.g., "realization_03_01"
  seedId: string; // link to Scene.id
  title: string;
  description: string;
  type: 'audio' | 'video' | 'text' | 'score' | 'performance' | 'other';
  creator?: string;
  dateCreated?: string;
  media?: {
    videoUrl?: string;
    audioUrl?: string;
    scoreUrl?: string;
    imageUrl?: string;
    notes?: string;
  };
  additionalData?: any;
}
