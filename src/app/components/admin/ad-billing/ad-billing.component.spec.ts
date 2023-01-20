import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBillingComponent } from './ad-billing.component';

describe('AdBillingComponent', () => {
  let component: AdBillingComponent;
  let fixture: ComponentFixture<AdBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
