import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TattvaService } from 'src/app/shared/services/tattva.service';

@Component({
  selector: 'app-tattva-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './tattva-detail.component.html',
  styleUrl: './tattva-detail.component.css',
})
export class TattvaDetailComponent implements OnInit {
  tattvaId: string | null = null;
  tattva: any;

  constructor(
    private route: ActivatedRoute,
    private tattvaService: TattvaService,
  ) {}

  ngOnInit(): void {
    this.tattvaId = this.route.snapshot.paramMap.get('id');
    const allTattvas = this.tattvaService.getAllOpinions();
    this.tattva = allTattvas.find((t) => t.id === this.tattvaId);
  }
}
