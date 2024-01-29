import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailPageComponent } from './productdetail-page.component';

describe('ProductdetailPageComponent', () => {
  let component: ProductdetailPageComponent;
  let fixture: ComponentFixture<ProductdetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetailPageComponent]
    });
    fixture = TestBed.createComponent(ProductdetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
