import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://200.234.231.11/gtdtasks-backend';
  private csrfUrl = 'http://200.234.231.11/gtdtasks-backend/sanctum/csrf-cookie';
  private apiUrl = 'http://200.234.231.11/gtdtasks-backend/login';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getCsrfToken(): Observable<any> {
    return this.http.get(this.csrfUrl, { withCredentials: true });
  }

  login(data: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.post(this.apiUrl, data, { headers: headers, withCredentials: true });
      })
    );
  }
  getUser(): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.get(this.baseUrl+"/api/user", { headers: headers, withCredentials: true });
      })
    );
  }

  register(data: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.post(this.baseUrl + '/register', data, { headers: headers, withCredentials: true });
      })
    );
  }

  // getUser(): Observable<any> {
  //   return this.http.get<any>(this.baseUrl + '/api/user');
  // }

  logout(): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.post(this.baseUrl+"/logout", {}, { headers: headers, withCredentials: true });
      })
    );
  }

}
