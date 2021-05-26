import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckindetailsComponent } from './checkindetails.component';

describe('CheckindetailsComponent', () => {
  let component: CheckindetailsComponent;
  let fixture: ComponentFixture<CheckindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckindetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
