import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBillingComponent } from './emp-billing.component';

describe('EmpBillingComponent', () => {
  let component: EmpBillingComponent;
  let fixture: ComponentFixture<EmpBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
