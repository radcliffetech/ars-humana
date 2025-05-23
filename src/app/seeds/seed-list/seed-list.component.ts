import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Seed } from '../../shared/models/seed.model';
import { SeedService } from '../../shared/services/seed.service';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  imports: [RouterModule, CommonModule],
})
export class SeedListComponent {
  seeds: Seed[];

  constructor(private seedService: SeedService) {
    this.seeds = this.seedService.getAllSeeds();
  }
}
