import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerJobCvComponent } from './per-job-cv.component';

describe('PerJobCvComponent', () => {
  let component: PerJobCvComponent;
  let fixture: ComponentFixture<PerJobCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerJobCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerJobCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
