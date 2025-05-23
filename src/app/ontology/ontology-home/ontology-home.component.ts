import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { OntologyService } from 'src/app/shared/services/ontology.service';
import { RouterModule } from '@angular/router';
import { Scene } from 'src/app/shared/models/scene.model';

@Component({
  selector: 'app-ontology-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ontology-home.component.html',
  styleUrl: './ontology-home.component.css',
})
export class OntologyHomeComponent implements OnInit {
  scenes: Scene[] = [];

  constructor(private ontologyService: OntologyService) {}

  ngOnInit(): void {
    this.scenes = this.ontologyService.getAllScenes();
  }

  get scenesByAct(): Record<string, Scene[]> {
    return this.scenes.reduce(
      (groups, scene) => {
        const act = scene.act || 'Unsorted';
        if (!groups[act]) groups[act] = [];
        groups[act].push(scene);
        return groups;
      },
      {} as Record<string, Scene[]>,
    );
  }
}
