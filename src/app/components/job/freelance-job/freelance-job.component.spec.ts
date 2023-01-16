import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceJobComponent } from './freelance-job.component';

describe('FreelanceJobComponent', () => {
  let component: FreelanceJobComponent;
  let fixture: ComponentFixture<FreelanceJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
