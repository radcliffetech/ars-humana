import { AboutComponent } from './about/about.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { OntologyHomeComponent } from './ontology/ontology-home/ontology-home.component';
import { Routes } from '@angular/router';
import { SceneDetailComponent } from './ontology/scene-detail/scene-detail.component';
import { SeedDetailComponent } from './seeds/seed-detail/seed-detail.component';
import { SeedListComponent } from './seeds/seed-list/seed-list.component';
import { TattvaDetailComponent } from './tattva/tattva-detail/tattva-detail.component';
import { TattvaGraphComponent } from './tattva/tattva-graph/tattva-graph.component';
import { TattvaIndexComponent } from './tattva/tattva-index/tattva-index.component';
export const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  { path: 'ontology', component: OntologyHomeComponent },
  {
    path: 'scene/:id',
    component: SceneDetailComponent,
  },
  { path: 'tattva', component: TattvaIndexComponent },
  { path: 'tattva/:id', component: TattvaDetailComponent },
  { path: 'tattva-graph', component: TattvaGraphComponent },
  { path: 'about', component: AboutComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'seeds', component: SeedListComponent },
  { path: 'seeds/:id', component: SeedDetailComponent },
];
