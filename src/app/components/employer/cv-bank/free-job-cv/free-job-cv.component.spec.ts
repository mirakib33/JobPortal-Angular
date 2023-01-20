import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJobCvComponent } from './free-job-cv.component';

describe('FreeJobCvComponent', () => {
  let component: FreeJobCvComponent;
  let fixture: ComponentFixture<FreeJobCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJobCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJobCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
