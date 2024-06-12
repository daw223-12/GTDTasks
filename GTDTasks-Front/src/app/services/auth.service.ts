import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost:8000';
  private csrfUrl = 'http://localhost:8000/sanctum/csrf-cookie';
  private apiUrl = 'http://localhost:8000/login';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getCsrfToken(): Observable<any> {
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

  // login(email: string, password: string): Observable<any> {
  //   // First, obtain the CSRF cookie
  //   return this.getCsrfToken()
  //     .pipe(
  //       switchMap((res) => {
  //         var headers = new HttpHeaders({
  //           'XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
  //         })
  //         return this.http.post(this.baseUrl+'/login',{ email: email, password: password }, { withCredentials: true })
  //       }),
  //       catchError(error => {
  //         return throwError(error);
  //       })
  //     );
  // }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/register', data);
  }

  // getUser(): Observable<any> {
  //   return this.http.get<any>(this.baseUrl + '/api/user');
  // }

  logout(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/logout');
  }

}
