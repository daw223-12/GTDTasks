import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent {
  constructor(private router: Router, private auth: AuthService) { }

  logout() {
    this.auth.logout().subscribe({
      next: res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: e => {
        console.error(e);
      }
    })
  }
}