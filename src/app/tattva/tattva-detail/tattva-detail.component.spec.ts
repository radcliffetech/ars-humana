import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattvaDetailComponent } from './tattva-detail.component';

describe('TattvaDetailComponent', () => {
  let component: TattvaDetailComponent;
  let fixture: ComponentFixture<TattvaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattvaDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TattvaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
