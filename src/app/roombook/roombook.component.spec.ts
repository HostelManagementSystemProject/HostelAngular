import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombookComponent } from './roombook.component';

describe('RoombookComponent', () => {
  let component: RoombookComponent;
  let fixture: ComponentFixture<RoombookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoombookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoombookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
