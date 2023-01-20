import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAccountInfoComponent } from './emp-account-info.component';

describe('EmpAccountInfoComponent', () => {
  let component: EmpAccountInfoComponent;
  let fixture: ComponentFixture<EmpAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAccountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
