import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelregistrationComponent } from './hostelregistration.component';

describe('HostelregistrationComponent', () => {
  let component: HostelregistrationComponent;
  let fixture: ComponentFixture<HostelregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
