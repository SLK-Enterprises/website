import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavServicesComponent } from './nav-services.component';

describe('NavServicesComponent', () => {
  let component: NavServicesComponent;
  let fixture: ComponentFixture<NavServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
