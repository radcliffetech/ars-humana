import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { TattvaGraphComponent } from './tattva-graph.component';
import { of } from 'rxjs';

describe('TattvaGraphComponent', () => {
  let component: TattvaGraphComponent;
  let fixture: ComponentFixture<TattvaGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattvaGraphComponent],
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

    fixture = TestBed.createComponent(TattvaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
