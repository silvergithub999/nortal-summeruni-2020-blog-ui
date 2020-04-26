import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  authForm: FormGroup;
  loginErrorMessage: string;
  loading = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      rememberMe: new FormControl(null)
    });
  }

  onSubmit() {
    const username = this.authForm.value.username;
    const password = this.authForm.value.password;
    const rememberMe = this.authForm.value.rememberMe;
    this.loading = true;
    this.authService.login(username, password, rememberMe).subscribe(
      responseData => {
        this.loading = false;
        this.loginErrorMessage = null;
        this.authService.user.next(username);
        this.router.navigate(['/', 'blog']);
      },
      error1 => {
        console.log(error1);
        this.loading = false;
        if (error1.status === 403) {
          this.loginErrorMessage = 'Invalid username or password';
        } else {
          this.loginErrorMessage = 'Error logging in...';
        }
      }
    );
  }

}
