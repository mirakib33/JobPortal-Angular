import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPaymentMethodComponent } from './emp-payment-method.component';

describe('EmpPaymentMethodComponent', () => {
  let component: EmpPaymentMethodComponent;
  let fixture: ComponentFixture<EmpPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPaymentMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
