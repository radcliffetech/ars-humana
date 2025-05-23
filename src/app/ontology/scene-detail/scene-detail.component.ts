import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MOCK_SCENES } from 'src/assets/mock/scenes.mock';
import { Scene } from 'src/app/shared/models/scene.model';

@Component({
  selector: 'app-scene-detail',
  templateUrl: './scene-detail.component.html',
  imports: [CommonModule, RouterModule],
})
export class SceneDetailComponent implements OnInit {
  scene: Scene | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.scene = MOCK_SCENES.find((scene) => scene.id === id);
    }
  }
}
