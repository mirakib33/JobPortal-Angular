import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAccountInfoComponent } from './ad-account-info.component';

describe('AdAccountInfoComponent', () => {
  let component: AdAccountInfoComponent;
  let fixture: ComponentFixture<AdAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAccountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
