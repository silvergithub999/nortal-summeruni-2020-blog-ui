import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateBlogpostComponent} from './create-blogpost/create-blogpost.component';
import {DetailBlogpostComponent} from './detail-blogpost/detail-blogpost.component';
import {EditBlogpostComponent} from './edit-blogpost/edit-blogpost.component';
import {ListBlogpostsComponent} from './list-blogposts/list-blogposts.component';
import {AuthGuard} from '../auth/auth.guard';
import {CanDeactivateGuard} from '../shared/deactivate.guard.service';
import {BlogComponent} from './blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListBlogpostsComponent
      },
      {
        path: 'new',
        component: CreateBlogpostComponent
      },
      {
        path: ':id',
        component: DetailBlogpostComponent
      },
      {
        path: 'edit/:id',
        component: EditBlogpostComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
