import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {EditBlogpostComponent} from '../blog/edit-blogpost/edit-blogpost.component';
import {Observable} from 'rxjs';

@Injectable({
  'providedIn': 'root'
})
export class CanDeactivateGuard implements CanDeactivate<EditBlogpostComponent> {
  canDeactivate(component: EditBlogpostComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate() || window.confirm('Are you sure?');
  }
}



