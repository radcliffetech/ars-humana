import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattvaIndexComponent } from './tattva-index.component';

describe('TattvaIndexComponent', () => {
  let component: TattvaIndexComponent;
  let fixture: ComponentFixture<TattvaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattvaIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattvaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
