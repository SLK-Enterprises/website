import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DthProviderComponent } from './dth-provider.component';

describe('DthProviderComponent', () => {
  let component: DthProviderComponent;
  let fixture: ComponentFixture<DthProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DthProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DthProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
