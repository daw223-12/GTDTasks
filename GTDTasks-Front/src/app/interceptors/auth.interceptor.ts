import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let modifiedReq = request.clone({ withCredentials: true });
    // modifiedReq = modifiedReq.clone({
    //   setHeaders: {
    //     'X-Requested-With': 'XMLHttpRequest'
    //   }
    // });
    console.log(modifiedReq)
    return next.handle(request);
  }
}
