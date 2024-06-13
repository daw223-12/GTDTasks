import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SimpleTask } from 'src/app/models/simple-task';
import { TaskSimpleComponent } from '../task-simple/task-simple.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @ViewChild(TaskSimpleComponent) taskSimple!: TaskSimpleComponent;

  ngOnInit(): void {
  }
  @Input() tasks!: SimpleTask[]

  refreshTasks() {
    this.taskSimple.fillTasks();
  }
  //
}
