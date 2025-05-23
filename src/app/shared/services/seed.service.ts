import { Injectable } from '@angular/core';
import { MOCK_REALIZATIONS } from '../../../assets/mock/realizations.mock';
import { Realization } from '../models/realization.model';
import { Seed } from '../models/seed.model';

const MOCK_SEEDS: Seed[] = [
  {
    id: '1',
    label: 'Vajra',
    description: 'A symbol of indestructibility and power.',
    type: 'concept',
    tags: ['Buddhism', 'Symbol'],
    realizations: [
      {
        id: 'realization_01_01',
        seedId: '1',
        title: 'Vajra Soundscape',
        description: 'A soundscape inspired by the Vajra symbol.',
        type: 'audio',
        creator: 'John Doe',
        dateCreated: '2023-10-01',
        media: {
          audioUrl: '/assets/audio/vajra_soundscape.mp3',
          imageUrl: '/assets/images/vajra_image.png',
          notes: 'A blend of traditional and modern sounds.',
        },
        additionalData: {
          additionalInfo: 'The Vajra is often depicted in art and literature.',
          relatedConcepts: ['Indestructibility', 'Power'],
        },
      },
    ],
  },
  {
    id: '2',
    label: 'Sound of Silence',
    description: 'The absence of sound, often associated with peace.',
    type: 'sound',
    tags: ['Philosophy', 'Concept'],
  },
];

@Injectable({ providedIn: 'root' })
export class SeedService {
  getAllSeeds(): Seed[] {
    return MOCK_SEEDS;
  }

  getSeedById(id: string): Seed | undefined {
    return MOCK_SEEDS.find((seed) => seed.id === id);
  }

  getRealizationsBySeedId(seedId: string): Realization[] {
    return MOCK_REALIZATIONS.filter((realization) => realization.seedId === seedId);
  }
  getRealizationById(id: string): Realization | undefined {
    return MOCK_REALIZATIONS.find((r) => r.id === id);
  }
  getRealizationBySeedId(id: string): Realization | undefined {
    return MOCK_REALIZATIONS.find((r) => r.seedId === id);
  }
}
