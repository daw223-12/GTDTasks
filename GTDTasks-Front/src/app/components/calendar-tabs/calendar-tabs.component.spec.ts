import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTabsComponent } from './calendar-tabs.component';

describe('CalendarTabsComponent', () => {
  let component: CalendarTabsComponent;
  let fixture: ComponentFixture<CalendarTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarTabsComponent]
    });
    fixture = TestBed.createComponent(CalendarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
