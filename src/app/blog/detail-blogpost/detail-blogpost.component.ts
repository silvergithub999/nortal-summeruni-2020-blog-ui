import { Component, OnInit } from '@angular/core';
import {Blogpost} from '../blogpost';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-detail-blogpost',
  templateUrl: './detail-blogpost.component.html',
  styleUrls: ['./detail-blogpost.component.scss']
})
export class DetailBlogpostComponent implements OnInit {
  blogpost: Blogpost;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    const routeSnapshot = this.route.snapshot;
    const id: number = routeSnapshot.params.id;
    this.blogService.getPost(id).subscribe(requestedBlogPost => {
      this.blogpost = requestedBlogPost;
      if (!this.blogpost) {
        this.router.navigate(['']);
      }
    });
  }

}
