import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: [null, [Validators.required, Validators.maxLength(10)]],
    password: [null, [Validators.required]],
    email: [null, [Validators.required,Validators.email]],
  });

  constructor(private fb: FormBuilder) { }

  isFormValid(): boolean {
    return this.registerForm.valid;
  }

  submitForm(): void {
    if (!this.isFormValid()) {
      window.alert('Please fill in all fields before submitting the form!');
      return;
    }
    const body = this.registerForm.getRawValue();
    const msg =
    `Your Registration Information:

    Username: ${body.username}
    Password: ******
    E-mail: ${body.email}`
    window.confirm(msg);
  }
  
}
