import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessComponent } from './wireless.component';

describe('WirelessComponent', () => {
  let component: WirelessComponent;
  let fixture: ComponentFixture<WirelessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirelessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
