import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl: string = 'http://localhost/api/appointments';

  constructor(private http: HttpClient) { }

  createNewAppointment(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  updateAppointment(data: any, id: number): Observable<any> {
    return this.http.put<any>(this.baseUrl+id, data);
  }

  getAppointment(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl+id);
  }
}
