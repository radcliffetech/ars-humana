import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { TattvaIndexComponent } from './tattva-index.component';
import { of } from 'rxjs';

describe('TattvaIndexComponent', () => {
  let component: TattvaIndexComponent;
  let fixture: ComponentFixture<TattvaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattvaIndexComponent],
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

    fixture = TestBed.createComponent(TattvaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
