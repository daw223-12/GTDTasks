import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const sessionReverseGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getUser().pipe(
    map(user => {
      if (user) {
        router.navigate(['/inbox']);
        return false;
      } else {
        return true;
      }
    }),
    catchError(error => {
      return of(true);  // En caso de error (por ejemplo, el servidor no responde), permitir el acceso a login/register
    })
  );
};
