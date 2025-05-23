import { Injectable } from '@angular/core';
import { TATTVA_ESSENCES } from 'src/assets/mock/essences.mock';
import { TATTVA_OPINIONS } from 'src/assets/mock/opinions.mock';
import { TattvaEssence } from 'src/app/shared/models/tattva-essence.model';
import { TattvaOpinion } from 'src/app/shared/models/tattva-opinion.model';

@Injectable({
  providedIn: 'root',
})
export class TattvaService {
  getAllEssences(): TattvaEssence[] {
    return TATTVA_ESSENCES;
  }

  getAllOpinions(): TattvaOpinion[] {
    return TATTVA_OPINIONS;
  }

  getEssenceById(id: string): TattvaEssence | undefined {
    return TATTVA_ESSENCES.find((e) => e.id === id);
  }

  getOpinionById(id: string): TattvaOpinion | undefined {
    return TATTVA_OPINIONS.find((o) => o.id === id);
  }
}
