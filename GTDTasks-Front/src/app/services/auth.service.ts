import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/login', data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/register', data);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/api/user');
  }

  logout(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/logout');
  }

}
