import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedDetailComponent } from './seed-detail.component';

describe('SeedDetailComponent', () => {
  let component: SeedDetailComponent;
  let fixture: ComponentFixture<SeedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
