import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePostedJobsComponent } from './free-posted-jobs.component';

describe('FreePostedJobsComponent', () => {
  let component: FreePostedJobsComponent;
  let fixture: ComponentFixture<FreePostedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePostedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
