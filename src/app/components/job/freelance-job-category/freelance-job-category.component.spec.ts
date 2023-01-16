import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceJobCategoryComponent } from './freelance-job-category.component';

describe('FreelanceJobCategoryComponent', () => {
  let component: FreelanceJobCategoryComponent;
  let fixture: ComponentFixture<FreelanceJobCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceJobCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceJobCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
