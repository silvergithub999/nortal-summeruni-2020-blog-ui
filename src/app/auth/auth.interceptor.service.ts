import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError, exhaustMap, take, tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authService.user.getValue();

    if (!user) {
      return next.handle(req).pipe(
        catchError(err => {
          this.authService.logout();
          return throwError(err);
        })
      );
    }

    const modifiedReq = req.clone({
      headers: new HttpHeaders().set('Authorization', user.token)
    });
    return next.handle(modifiedReq).pipe(
        catchError(err => {
          this.authService.logout();
          return throwError(err);
        })
      );
  }
}
