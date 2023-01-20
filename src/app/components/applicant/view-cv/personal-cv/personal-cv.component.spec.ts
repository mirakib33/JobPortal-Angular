import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCvComponent } from './personal-cv.component';

describe('PersonalCvComponent', () => {
  let component: PersonalCvComponent;
  let fixture: ComponentFixture<PersonalCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
