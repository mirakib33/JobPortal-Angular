import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPaymentMethodComponent } from './ad-payment-method.component';

describe('AdPaymentMethodComponent', () => {
  let component: AdPaymentMethodComponent;
  let fixture: ComponentFixture<AdPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPaymentMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
