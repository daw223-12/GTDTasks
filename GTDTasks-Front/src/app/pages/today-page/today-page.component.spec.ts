import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPageComponent } from './today-page.component';

describe('TodayPageComponent', () => {
  let component: TodayPageComponent;
  let fixture: ComponentFixture<TodayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayPageComponent]
    });
    fixture = TestBed.createComponent(TodayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
