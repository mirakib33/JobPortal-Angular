import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBalanceComponent } from './ad-balance.component';

describe('AdBalanceComponent', () => {
  let component: AdBalanceComponent;
  let fixture: ComponentFixture<AdBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
