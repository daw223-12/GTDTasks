import { Component, Input } from '@angular/core';
import { SimpleTask } from 'src/app/models/simple-task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() tasks!: SimpleTask[]
}
