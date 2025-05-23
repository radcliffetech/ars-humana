import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { TattvaDetailComponent } from './tattva-detail.component';
import { of } from 'rxjs';

describe('TattvaDetailComponent', () => {
  let component: TattvaDetailComponent;
  let fixture: ComponentFixture<TattvaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattvaDetailComponent],
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

    fixture = TestBed.createComponent(TattvaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
