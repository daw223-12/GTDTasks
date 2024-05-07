import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTabsComponent } from './reminder-tabs.component';

describe('ReminderTabsComponent', () => {
  let component: ReminderTabsComponent;
  let fixture: ComponentFixture<ReminderTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderTabsComponent]
    });
    fixture = TestBed.createComponent(ReminderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
