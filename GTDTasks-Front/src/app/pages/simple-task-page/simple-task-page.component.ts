import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskCardComponent } from 'src/app/components/task-card/task-card.component';
import { SimpleTask } from 'src/app/models/simple-task';
import { TaskResponse } from 'src/app/models/task-response';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-simple-task-page',
  templateUrl: './simple-task-page.component.html',
  styleUrls: ['./simple-task-page.component.scss'],
})
export class SimpleTaskPageComponent implements OnInit {
  @ViewChildren(TaskCardComponent) taskCards!: QueryList<TaskCardComponent>

  ruta!: string;
  actionables: SimpleTask[] = [];
  inbox: SimpleTask[] = [];
  today: SimpleTask[] = [];
  hibernatings: SimpleTask[] = [];


  constructor(private route: ActivatedRoute, private taskApi: TasksService) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.ruta = segments.join('/');
    });
    this.taskApi.getTasks().subscribe({next: res => {
      this.filterTasksByType(res)
    }});
  }
  

  filterTasksByType(data: SimpleTask[]){
    data.forEach(item => {
      if (item.type === 'actionable') {
        this.actionables.push(item);
      } else if (item.type === 'inbox') {
        this.inbox.push(item);
      } else if (item.type === 'hibernating') {
        this.hibernatings.push(item);
      } else if (item.type === 'today') {
        this.today.push(item);
      }
    });

    this.refreshTaskCards();

  }

  refreshTaskCards() {
    this.taskCards.forEach(taskCard => {
      if (taskCard.tasks.length) {
        taskCard.refreshTasks();
      }
    });
  }
}
