import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleTask } from 'src/app/models/simple-task';
import { TaskResponse } from 'src/app/models/task-response';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-simple-task-page',
  templateUrl: './simple-task-page.component.html',
  styleUrls: ['./simple-task-page.component.scss'],
})
export class SimpleTaskPageComponent implements OnInit {
  ruta!: string;
  tasksReceived!: TaskResponse[];
  actionables: SimpleTask[] = [];
  inbox: SimpleTask[] = [];
  hibernatings: SimpleTask[] = [];


  constructor(private route: ActivatedRoute, private taskApi: TasksService) {}
  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.ruta = segments.join('/');
    });
    this.taskApi.createNewTask({ name: 'Néstor guapo', type: 'actionable' }).subscribe({next: res => {console.log(res)}});
    this.taskApi.getTasks().subscribe({next: res => {console.log(res)}});
  }

  

  filterTasksByType(data: SimpleTask[]){
    data.forEach(item => {
      if (item.type === 'actionable') {
        this.actionables.push(item);
      } else if (item.type === 'inbox') {
        this.inbox.push(item);
      } else if (item.type === 'hibernating') {
        this.hibernatings.push(item);
      }
      // Puedes agregar más condiciones si tienes más tipos
    });
  }
}
