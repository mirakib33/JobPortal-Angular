import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerPostedJobsComponent } from './per-posted-jobs.component';

describe('PerPostedJobsComponent', () => {
  let component: PerPostedJobsComponent;
  let fixture: ComponentFixture<PerPostedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerPostedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerPostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
