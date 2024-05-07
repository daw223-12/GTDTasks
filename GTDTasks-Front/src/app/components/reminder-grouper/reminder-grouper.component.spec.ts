import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderGrouperComponent } from './reminder-grouper.component';

describe('ReminderGrouperComponent', () => {
  let component: ReminderGrouperComponent;
  let fixture: ComponentFixture<ReminderGrouperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderGrouperComponent]
    });
    fixture = TestBed.createComponent(ReminderGrouperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
