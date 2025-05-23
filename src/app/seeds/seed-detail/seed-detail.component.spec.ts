import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { SeedDetailComponent } from './seed-detail.component';
import { of } from 'rxjs';

describe('SeedDetailComponent', () => {
  let component: SeedDetailComponent;
  let fixture: ComponentFixture<SeedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedDetailComponent],
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

    fixture = TestBed.createComponent(SeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
