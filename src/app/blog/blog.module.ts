import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogRoutingModule} from './blog-routing.module';
import {CreateBlogpostComponent} from './create-blogpost/create-blogpost.component';
import {DetailBlogpostComponent} from './detail-blogpost/detail-blogpost.component';
import {EditBlogpostComponent} from './edit-blogpost/edit-blogpost.component';
import {ListBlogpostsComponent} from './list-blogposts/list-blogposts.component';
import {AuthModule} from '../auth/auth.module';
import { NavigationComponent } from './navigation/navigation.component';
import {SharedModule} from '../shared/shared.module';
import { BlogComponent } from './blog.component';
import { BlogpostIntroComponent } from './list-blogposts/blogpost-intro/blogpost-intro.component';
import {BlogService} from './blog.service';



@NgModule({
  declarations: [
    NavigationComponent,
    CreateBlogpostComponent,
    DetailBlogpostComponent,
    EditBlogpostComponent,
    ListBlogpostsComponent,
    BlogComponent,
    BlogpostIntroComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
