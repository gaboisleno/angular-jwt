import { Component } from '@angular/core';
import { SessionService } from '../../../auth/session.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
    repeatPassword: ['', [Validators.required]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private sessionService: SessionService){}

  register(): void {
    this.sessionService.register({
      username: this.registerForm.get('username')!.value!,
      email: this.registerForm.get('email')!.value!,
      password: this.registerForm.get('password')!.value!,
    })
    .subscribe({
      next: () => this.registerSuccess(),
    })
  }

  registerSuccess(): void {
    this.router.navigate(["/login"]);
  }
}
