import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {first, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient,
              private router: Router) { }

  private signupEndpoint = '/auth/register';
  private loginEndpoint = '/auth/login';
  private logoutEndpoint = '/auth/logout';

  login(username: string, password: string, rememberMe: boolean) {
    const loginHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    if (rememberMe) {
      body = body.set('remember-me', 'on');
    }

    return this.http.post(
      this.loginEndpoint,
      body,
      {headers: loginHeader}).pipe(first());
  }

  signUp(email: string, username: string, password: string) {
    return this.http.post(this.signupEndpoint, {
      email,
      username,
      password
    }).pipe(first());
  }

  logout() {
    // TODO: change to POST here and in Spring
    return this.http.get(this.logoutEndpoint).pipe(
      first(),
      tap(responseData => {
        this.user.next(null);
        this.router.navigate(['/login']);
      })
    );
  }

  // TODO: auto login when there is a valid cookie
}
