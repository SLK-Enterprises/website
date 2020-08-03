import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingProductsComponent } from './networking-products.component';

describe('NetworkingProductsComponent', () => {
  let component: NetworkingProductsComponent;
  let fixture: ComponentFixture<NetworkingProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkingProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
