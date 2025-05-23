import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattvaGraphComponent } from './tattva-graph.component';

describe('TattvaGraphComponent', () => {
  let component: TattvaGraphComponent;
  let fixture: ComponentFixture<TattvaGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattvaGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattvaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
