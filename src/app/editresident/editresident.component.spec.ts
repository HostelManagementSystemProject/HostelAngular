import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditresidentComponent } from './editresident.component';

describe('EditresidentComponent', () => {
  let component: EditresidentComponent;
  let fixture: ComponentFixture<EditresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditresidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
