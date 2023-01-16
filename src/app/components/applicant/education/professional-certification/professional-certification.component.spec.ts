import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCertificationComponent } from './professional-certification.component';

describe('ProfessionalCertificationComponent', () => {
  let component: ProfessionalCertificationComponent;
  let fixture: ComponentFixture<ProfessionalCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
