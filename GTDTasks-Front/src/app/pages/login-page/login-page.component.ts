import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import { LoginData } from 'src/app/models/login-data';
import { RegisterData } from 'src/app/models/register-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  mostrarHijos: boolean = true;
  ruta!: string;
  loginData: LoginData = {email: "", password: ""}
  registerData: RegisterData = {
    username: '',
    email: '',
    password: '',
    rePassword: ''
  }

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.ruta = segments.join('/');
    });
    // this.auth.getxsrfToken().subscribe({
    //   next: (res) => {console.log(res)}
    // })
    // this.auth.login("zzz@zzz", "Example123").subscribe({
    //   next: (res) => {
    //     console.log(res)
    //   }
    // })

    // this.auth.getUser().subscribe({
    //   next: (res) => {
        
    //   },
    //   error: e => {
        
    //   }
    // })
  }

  register() {
    console.log(this.registerData)
    this.auth.register({
      "name" : "Prueba",
      "email" : "fjuesas4@gmail.com",
      "password" : "Example123",
      "password_confirmation": "Example123"
  }).subscribe({
    next: res => {
      this.router.navigate(['/inbox']);
    }
  })
  }

  login() {
    this.auth.login({email: "fjuesas4@gmail.com", password: "Example123"}).subscribe({
      next: (res) => {
        this.router.navigate(['/inbox']);
      }
    })
  }
}
