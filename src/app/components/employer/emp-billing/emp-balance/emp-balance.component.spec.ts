import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBalanceComponent } from './emp-balance.component';

describe('EmpBalanceComponent', () => {
  let component: EmpBalanceComponent;
  let fixture: ComponentFixture<EmpBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
