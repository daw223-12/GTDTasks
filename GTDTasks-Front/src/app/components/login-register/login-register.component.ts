import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterData } from 'src/app/models/register-data';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  
  @Output() registerClicked: EventEmitter<void> = new EventEmitter<void>()
  @Input() registerData: RegisterData = {
    email: '', 
    password: '',
    username: '',
    rePassword: ''
  }

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.registerData.username = this.registerForm.get('username')!.value;
      this.registerData.email = this.registerForm.get('email')!.value;
      this.registerData.password = this.registerForm.get('password')!.value;
      this.registerData.rePassword = this.registerForm.get('confirmPassword')!.value;
    if (this.registerData.rePassword == this.registerData.password)
      this.registerClicked.emit();
    else
      this.registerForm.get('confirmPassword')!.setErrors({ 'incorrect': true });
    }
  }
}
