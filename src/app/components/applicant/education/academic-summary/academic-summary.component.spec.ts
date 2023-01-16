import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSummaryComponent } from './academic-summary.component';

describe('AcademicSummaryComponent', () => {
  let component: AcademicSummaryComponent;
  let fixture: ComponentFixture<AcademicSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
