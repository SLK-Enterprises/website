import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandDigitaltvComponent } from './broadband-digitaltv.component';

describe('BroadbandDigitaltvComponent', () => {
  let component: BroadbandDigitaltvComponent;
  let fixture: ComponentFixture<BroadbandDigitaltvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadbandDigitaltvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadbandDigitaltvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
