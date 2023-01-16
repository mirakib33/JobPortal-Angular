import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOthersComponent } from './emp-others.component';

describe('EmpOthersComponent', () => {
  let component: EmpOthersComponent;
  let fixture: ComponentFixture<EmpOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
