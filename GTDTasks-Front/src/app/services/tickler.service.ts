import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TicklerService {
  private baseUrl: string = 'http://localhost:8000/api/ticklers';
  private csrfUrl = 'http://localhost:8000/sanctum/csrf-cookie';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getCsrfToken(): Observable<any> {
    return this.http.get(this.csrfUrl, { withCredentials: true });
  }

  createNewTickler(data: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.post(this.baseUrl, data, { headers: headers, withCredentials: true });
      })
    );
  }

  getTicklers(): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.get(this.baseUrl, { headers: headers, withCredentials: true });
      })
    );
  }


  updateTickler(data: any, id: number): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.put(this.baseUrl+"/"+id, data, { headers: headers, withCredentials: true });
      })
    );
  }

  deleteTickler(id: number): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.delete(this.baseUrl+"/"+id, { headers: headers, withCredentials: true });
      })
    );
  }
}
