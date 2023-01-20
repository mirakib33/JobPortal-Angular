import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPersonalDetailsComponent } from './ad-personal-details.component';

describe('AdPersonalDetailsComponent', () => {
  let component: AdPersonalDetailsComponent;
  let fixture: ComponentFixture<AdPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPersonalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
