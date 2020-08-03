import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalfiberComponent } from './opticalfiber.component';

describe('OpticalfiberComponent', () => {
  let component: OpticalfiberComponent;
  let fixture: ComponentFixture<OpticalfiberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpticalfiberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticalfiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
