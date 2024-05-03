import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSimpleComponent } from './task-simple.component';

describe('TaskSimpleComponent', () => {
  let component: TaskSimpleComponent;
  let fixture: ComponentFixture<TaskSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskSimpleComponent]
    });
    fixture = TestBed.createComponent(TaskSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
