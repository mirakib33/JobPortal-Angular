import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJobPostComponent } from './free-job-post.component';

describe('FreeJobPostComponent', () => {
  let component: FreeJobPostComponent;
  let fixture: ComponentFixture<FreeJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJobPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
