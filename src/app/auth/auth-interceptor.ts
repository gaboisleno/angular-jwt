import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token =  localStorage.getItem('jwt_token');
        const authReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });

        return next.handle(authReq)
        .pipe(
            tap({
                next: () => {},
                error: (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            // Unauthorized
                            this.router.navigate(['/account/login']);
                        }
                    }
                }
            })
        )
    }
}