import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackingGridComponent } from './stacking-grid.component';

describe('StackingGridComponent', () => {
  let component: StackingGridComponent;
  let fixture: ComponentFixture<StackingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackingGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
