import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Blogpost} from '../blogpost';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.scss', '../blog.component.scss']
})
export class EditBlogpostComponent implements OnInit {
  blogpost: Blogpost;
  id: number;

  submitted = false;

  updateBlogPostForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) {
  }

  ngOnInit() {
    const routeSnapshot = this.route.snapshot;
    this.id = routeSnapshot.params.id;
    this.blogService.getPost(this.id).subscribe(blogPostForEdit => {
      this.blogpost = blogPostForEdit;

      if (!this.blogpost && !this.blogpost.title) {
        // TODO: output that this post doesn't exist.
        this.router.navigate(['']);
      }

      this.updateBlogPostForm = new FormGroup({
        title: new FormControl(this.blogpost.title, Validators.required),
        content: new FormControl(this.blogpost.content, [Validators.required, Validators.minLength(50)])
      });
    });
  }

  onSubmit() {
    const title = this.updateBlogPostForm.value.title;
    const content = this.updateBlogPostForm.value.content;
    const blogpost = new Blogpost(title, content);
    this.blogService.updatePost(this.id, blogpost).subscribe(() => {
      this.submitted = true;
      this.router.navigate(['/', 'blog', this.id]);
    });

  }

  onRemove() {
    if (window.confirm('Are you sure you want to delete this post?').valueOf()) {
      this.blogService.removePost(this.id).subscribe(() => {
        this.router.navigate(['/', 'blog']);
      });
    }
  }

  canDeactivate() {
    if (this.updateBlogPostForm.dirty && !this.submitted) {
      return false;
    }
    return true;
  }

  get title() {
    return this.updateBlogPostForm.get('title');
  }

  get content() {
    return this.updateBlogPostForm.get('content');
  }
}
