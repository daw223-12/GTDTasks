import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {

  constructor(private authService: AuthService) { 
    authService.login("fjuesas4@gmail.com", "Ejemplo123").subscribe({
      next: (value) => {console.log(value)}
    })
  }


}
