import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFatherComponent } from './task-father.component';

describe('TaskFatherComponent', () => {
  let component: TaskFatherComponent;
  let fixture: ComponentFixture<TaskFatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFatherComponent]
    });
    fixture = TestBed.createComponent(TaskFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
