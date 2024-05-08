import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskConnectionService {

  private baseUrl: string = "127.0.0.1/api"

  constructor() { }
}
