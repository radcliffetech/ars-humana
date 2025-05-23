import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntologyHomeComponent } from './ontology-home.component';

describe('OntologyHomeComponent', () => {
  let component: OntologyHomeComponent;
  let fixture: ComponentFixture<OntologyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OntologyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntologyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
