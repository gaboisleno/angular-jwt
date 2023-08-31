import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SessionService } from '../../../auth/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.fb.group({
    username: [],
    password: []
  });

  constructor(private router:Router, private fb: FormBuilder, private sessionService: SessionService){}
 
  ngOnInit(): void {}
  
  login(): void {
    this.sessionService.login({
      username: this.loginForm.get('username')!.value!,
      password: this.loginForm.get('password')!.value!,
    }).subscribe({
      next: () => { this.router.navigate(['/home']) }
    });
  }

}
