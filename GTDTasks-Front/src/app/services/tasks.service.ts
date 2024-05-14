import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskResponse } from '../models/task-response';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl: string = 'http://localhost/api/tasks';

  constructor(private http: HttpClient) { }

  createNewTask(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  updateTask(data: any, id: number): Observable<any> {
    return this.http.put<any>(this.baseUrl+id, data);
  }

  getTasks(): Observable<TaskResponse[]> {
    return this.http.get<TaskResponse[]>(this.baseUrl);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl+id);
  }
}
