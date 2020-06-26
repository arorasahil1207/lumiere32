import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedChartsComponent } from './shared-charts.component';

describe('SharedChartsComponent', () => {
  let component: SharedChartsComponent;
  let fixture: ComponentFixture<SharedChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
