import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {first, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient,
              private router: Router) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');  // TODO: get it out of token
    if (token) {
      const user = new User(token);
      user.username = username;
      this.user.next(new User(token));
    }
  }

  private signupEndpoint = '/register';
  private loginEndpoint = '/login';

  login(username: string, password: string, rememberMe: boolean) {
    return this.http.post(
      this.loginEndpoint,
      {
        username,
        password
      },
    {observe: 'response'}).pipe(
      first(),
      tap(responseData => {
        const token = responseData.headers.get('Authorization');
        const user = new User(token);
        user.username = username;
        this.user.next(user);
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', username);
      }));
  }

  signUp(email: string, username: string, password: string) {
    return this.http.post(this.signupEndpoint, {
      email,
      username,
      password
    }).pipe(
      first(),
      tap(x =>
        this.router.navigate(['/login'])
      ));
  }

  logout() {
    localStorage.removeItem('token');
    this.user.next(null);
    this.router.navigate(['/login']);
  }
}
