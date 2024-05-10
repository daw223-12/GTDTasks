import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8000/login';
  private registerUrl = 'http://localhost:8000/register';
  private logoutUrl = 'http://localhost:8000/logout';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // First, obtain the CSRF cookie
    return this.http.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true })
      .pipe(
        switchMap(() => {
          const session = this.getCookie('gtd_task_session');
          if (!session) {
            throw new Error('XSRF-TOKEN cookie not found');
          }
          console.log(session)
          console.log("Cookie: "+session)
          const headers = new HttpHeaders({
            'Accept': 'application/json',
            'X-XSRF-TOKEN': session
          });

          return this.http.post(this.loginUrl, { email, password }, { headers, withCredentials: true })
            .pipe(
              catchError(error => {
                return throwError(error);
              })
            );
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    console.log(parts.pop()?.split(';').shift())
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
}
