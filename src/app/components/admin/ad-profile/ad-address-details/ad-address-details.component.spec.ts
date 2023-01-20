import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAddressDetailsComponent } from './ad-address-details.component';

describe('AdAddressDetailsComponent', () => {
  let component: AdAddressDetailsComponent;
  let fixture: ComponentFixture<AdAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAddressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
