import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Seed } from '../../shared/models/seed.model';
import { SeedService } from '../../shared/services/seed.service';

@Component({
  selector: 'app-seed-detail',
  templateUrl: './seed-detail.component.html',
  imports: [RouterModule, CommonModule],
})
export class SeedDetailComponent implements OnInit {
  seed?: Seed;

  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.seed = this.seedService.getSeedById(id);
  }
}
