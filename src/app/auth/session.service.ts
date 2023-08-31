import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, map, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

type JwtToken = {
  token: string
};

interface ILoginUser {
  username: string,
  password: string
}

interface IRegisterUser {
  username: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: HttpClient, private router: Router) { }

  login(user: ILoginUser): Observable<void> {
    return this.http.post<JwtToken>(`${environment.backendUrl}/api/auth/login`, user)
    .pipe(
      map(e => this.authSuccess(e)),
      shareReplay()
    )
  }

  register(user: IRegisterUser): Observable<any> {
    return this.http.post(`${environment.backendUrl}/api/auth/register`, user);
  }

  logout(): void {
    localStorage.removeItem("jwt_token");
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("jwt_token");
    
    if (token) {
      const jwt = JSON.parse(atob((token).split('.')[1]));
      return ((Math.floor(new Date().getTime() / 1000)) < jwt.exp); //  is token expired
    }
    else return false;
  }

  private authSuccess(response: JwtToken): void {
    localStorage.setItem("jwt_token", response.token);
  }

}
