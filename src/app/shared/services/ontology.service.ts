import { MOCK_ACTS, MOCK_SCENES } from '../../../assets/mock/scenes.mock';

import { Act } from '../models/act.model';
import { Injectable } from '@angular/core';
import { MOCK_REALIZATIONS } from '../../../assets/mock/realizations.mock';
import { Realization } from '../models/realization.model';
import { Scene } from '../models/scene.model';

@Injectable({ providedIn: 'root' })
export class OntologyService {
  getAllActs(): Act[] {
    return MOCK_ACTS;
  }
  getAllScenes(): Scene[] {
    return MOCK_SCENES;
  }

  getSceneById(id: string): Scene | undefined {
    return MOCK_SCENES.find((scene) => scene.id === id);
  }

  getRealizationsBySceneId(sceneId: string): Realization[] {
    return MOCK_REALIZATIONS.filter((realization) => realization.seedId === sceneId);
  }

  getRealizationById(id: string): Realization | undefined {
    return MOCK_REALIZATIONS.find((r) => r.id === id);
  }
}
