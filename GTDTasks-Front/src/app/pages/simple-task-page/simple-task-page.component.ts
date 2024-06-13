import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskResponse } from 'src/app/models/task-response';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-simple-task-page',
  templateUrl: './simple-task-page.component.html',
  styleUrls: ['./simple-task-page.component.scss']
})
export class SimpleTaskPageComponent implements OnInit {
  ruta!: string;
  tasksReceived!: TaskResponse[];

  constructor(private route: ActivatedRoute, private taskApi: TasksService) {}
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.ruta = segments.join('/');
    });
  }

  filterTasksByType(type: string): TaskResponse[] {
    return this.tasksReceived.filter(task => task.type === type);
  }
}
