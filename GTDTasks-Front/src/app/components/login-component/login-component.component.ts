import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'src/app/models/login-data';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() loginData: LoginData = {email: "", password: ""}
  @Output() loginClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginData.email = this.loginForm.get('email')!.value;
      this.loginData.password = this.loginForm.get('password')!.value;
      this.loginClicked.emit();
    }
  }
}
