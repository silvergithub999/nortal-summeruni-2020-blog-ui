import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../auth.scss']
})
export class SignupComponent implements OnInit {

  hide = true;
  authForm: FormGroup;
  signUpErrorMessage: string;
  loading = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const email = this.authForm.value.email;
    const username = this.authForm.value.username;
    const password = this.authForm.value.password;
    this.loading = true;
    this.authService.signUp(email, username, password).subscribe(responseData => {
      this.loading = false;
      this.signUpErrorMessage = null;
      this.router.navigate(['/', 'login']);
    },
    error1 => {
      console.log(error1);
      this.loading = false;
      if (error1.status === 409) {
        this.signUpErrorMessage = 'Username is already taken';
      } else {
        this.signUpErrorMessage = 'Error registering user...';
      }
    });
  }

}
