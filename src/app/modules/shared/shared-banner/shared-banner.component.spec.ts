import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBannerComponent } from './shared-banner.component';

describe('SharedBannerComponent', () => {
  let component: SharedBannerComponent;
  let fixture: ComponentFixture<SharedBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
