import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { OntologyHomeComponent } from './ontology-home.component';
import { of } from 'rxjs';

describe('OntologyHomeComponent', () => {
  let component: OntologyHomeComponent;
  let fixture: ComponentFixture<OntologyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OntologyHomeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              paramMap: {
                get: () => null,
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OntologyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
