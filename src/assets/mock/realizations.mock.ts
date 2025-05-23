import { Realization } from 'src/app/shared/models/realization.model';

export const MOCK_REALIZATIONS: Realization[] = [
  {
    id: 'realization_03_01',
    seedId: '03_sadasiva',
    title: 'Ambient Voice & Lightbox',
    description: 'A realization of Sadāśiva using processed vocal loops and pulsing LED mandalas',
    type: 'audio',
    creator: 'Jeffrey Radcliffe',
    dateCreated: '2025-05-21',
    media: {
      audioUrl: '/assets/audio/sadasiva_loop.mp3',
      imageUrl: '/assets/images/lightbox_render.png',
      notes: 'Loop constructed from layered “aham”s modulated in stereo phase',
    },
  },
];
