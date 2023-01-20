import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerJobPostComponent } from './per-job-post.component';

describe('PerJobPostComponent', () => {
  let component: PerJobPostComponent;
  let fixture: ComponentFixture<PerJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerJobPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
