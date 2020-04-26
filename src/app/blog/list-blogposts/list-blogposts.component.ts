import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {Blogpost} from '../blogpost';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-list-blogposts',
  templateUrl: './list-blogposts.component.html',
  styleUrls: ['./list-blogposts.component.scss']
})
export class ListBlogpostsComponent implements OnInit {
  allBlogPosts: Blogpost[] = [];
  user: string;

  constructor(private blogService: BlogService,
              private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user.getValue();
    this.blogService.getAllPosts().subscribe(blogPosts => {
      this.allBlogPosts = blogPosts;
    });
  }

  sortByTitle() {
    this.allBlogPosts = this.allBlogPosts.sort((blog1, blog2) => blog1.title.localeCompare(blog2.title))
  }

  sortByDate() {
    this.allBlogPosts = this.allBlogPosts.sort((blog1, blog2) => {
      const blog1Date = new Date(blog1.timeOfCreation);
      const blog2Date = new Date(blog2.timeOfCreation);

      if (blog1Date.getTime() > blog2Date.getTime()) {
        return 1;
      }
      if (blog1Date.getTime() < blog2Date.getTime()) {
        return -1;
      }
      return 0;
    });
  }
}
