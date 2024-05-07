import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHorizontalGrouperComponent } from './task-horizontal-grouper.component';

describe('TaskHorizontalGrouperComponent', () => {
  let component: TaskHorizontalGrouperComponent;
  let fixture: ComponentFixture<TaskHorizontalGrouperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskHorizontalGrouperComponent]
    });
    fixture = TestBed.createComponent(TaskHorizontalGrouperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
