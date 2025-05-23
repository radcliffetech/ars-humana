import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import glossaryData from '../../assets/glossary.json';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  imports: [CommonModule, RouterModule],
})
export class GlossaryComponent {
  terms = [...glossaryData].sort((a, b) => a.term.localeCompare(b.term));
}
