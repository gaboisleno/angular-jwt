import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { SessionService } from "./session.service";


@Injectable({ 
  providedIn: 'root' 
})
class AuthGuard {
  constructor(private router: Router, private sessionService: SessionService) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionService.isAuthenticated()) {
      console.log('is auth');
      return true;
    } 
    localStorage.removeItem('jwt_token');
    console.log('is not auth');
    this.router.navigate(['/account/login']);
    return false;
  }
}

export const AccessGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuard).canActivate(route, state);
}