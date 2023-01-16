import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentJobCategoryComponent } from './permanent-job-category.component';

describe('PermanentJobCategoryComponent', () => {
  let component: PermanentJobCategoryComponent;
  let fixture: ComponentFixture<PermanentJobCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentJobCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentJobCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
