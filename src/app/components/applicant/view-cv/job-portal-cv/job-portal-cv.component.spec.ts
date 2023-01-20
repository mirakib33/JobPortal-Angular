import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPortalCvComponent } from './job-portal-cv.component';

describe('JobPortalCvComponent', () => {
  let component: JobPortalCvComponent;
  let fixture: ComponentFixture<JobPortalCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPortalCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPortalCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
