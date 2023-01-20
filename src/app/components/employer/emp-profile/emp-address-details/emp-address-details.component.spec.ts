import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddressDetailsComponent } from './emp-address-details.component';

describe('EmpAddressDetailsComponent', () => {
  let component: EmpAddressDetailsComponent;
  let fixture: ComponentFixture<EmpAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
