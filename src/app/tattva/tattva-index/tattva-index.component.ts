import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TattvaService } from 'src/app/shared/services/tattva.service';

@Component({
  selector: 'app-tattva-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tattva-index.component.html',
  styleUrl: './tattva-index.component.css',
})
export class TattvaIndexComponent implements OnInit {
  essences: any;
  opinions: any;
  groups: any;
  groupedOpinions: { group: string; items: any[] }[] = [];

  constructor(private tattvaService: TattvaService) {}

  ngOnInit(): void {
    this.essences = this.tattvaService.getAllEssences();
    this.opinions = this.tattvaService.getAllOpinions();

    const tattvaOrder = [
      '01_siva',
      '02_sakti',
      '03_sadasiva',
      '04_isvara',
      '05_suddhavidya',
      '06_maya',
      '07_kala',
      '08_niyati',
      '09_raga',
      '10_vidya',
      '11_kala',
      '12_purusa',
      '13_prakrti',
      '14_buddhi',
      '15_ahamkara',
      '16_manas',
      '17_srotra',
      '18_tvak',
      '19_caksus',
      '20_jihva',
      '21_ghrana',
      '22_vak',
      '23_pani',
      '24_pada',
      '25_upastha',
      '26_payu',
      '27_sabda',
      '28_sparsa',
      '29_rupa',
      '30_rasa',
      '31_gandha',
      '32_akasa',
      '33_vayu',
      '34_tejas',
      '35_apas',
      '36_prthivi',
    ];

    this.opinions.sort((a: any, b: any) => {
      return tattvaOrder.indexOf(a.id) - tattvaOrder.indexOf(b.id);
    });

    // Define tattva groups
    const tattvaGroups: Record<string, string[]> = {
      shuddha: ['01_siva', '02_sakti', '03_sadasiva', '04_isvara', '05_suddhavidya'],
      shuddhaAshuddha: [
        '06_maya',
        '07_kala',
        '08_niyati',
        '09_raga',
        '10_vidya',
        '11_kala',
        '12_purusa',
      ],
      prakriti: ['13_prakrti'],
      antahkarana: ['14_buddhi', '15_ahamkara', '16_manas'],
      jnanendriyas: ['17_srotra', '18_tvak', '19_caksus', '20_jihva', '21_ghrana'],
      karmendriyas: ['22_vak', '23_pani', '24_pada', '25_upastha', '26_payu'],
      tanmatras: ['27_sabda', '28_sparsa', '29_rupa', '30_rasa', '31_gandha'],
      mahabhutas: ['32_akasa', '33_vayu', '34_tejas', '35_apas', '36_prthivi'],
    };

    // Assign group property to each tattva
    this.opinions.forEach((t: any) => {
      for (const [group, ids] of Object.entries(tattvaGroups)) {
        if (ids.includes(t.id)) {
          t.group = group;
          break;
        }
      }
    });
    // add each group to this
    this.opinions.forEach((t: any) => {
      if (t.group) {
        t.group = t.group.charAt(0).toUpperCase() + t.group.slice(1);
      }
    });

    const groupMap = new Map<string, any[]>();
    this.opinions.forEach((t: any) => {
      if (!groupMap.has(t.group)) {
        groupMap.set(t.group, []);
      }
      groupMap.get(t.group)?.push(t);
    });

    this.groupedOpinions = Array.from(groupMap.entries()).map(([group, items]) => ({
      group,
      items,
    }));
  }

  groupByGroup(a: any, b: any): number {
    return 0;
  }
}
