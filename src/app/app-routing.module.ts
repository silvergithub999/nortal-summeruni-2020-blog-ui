import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {AnonymousGuardService} from './auth/anonymous.guards';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog'
  },
  {
    path: 'login',
    canActivate: [AnonymousGuardService],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [AnonymousGuardService],
    component: SignupComponent
  },
  {
    path: 'blog',
    canActivate: [AuthGuard],
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: '**',
    redirectTo: 'blog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
