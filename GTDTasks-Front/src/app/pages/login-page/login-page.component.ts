import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.ruta = segments.join('/');
    });
  }

  register() {
    console.log(this.registerData)
    //this.auth.register(this.registerData).subscribe()
  }

  login() {
    console.log(this.loginData)
    //this.auth.login(this.loginData).subscribe()
  }
}
