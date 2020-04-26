import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BlogService} from '../blog.service';
import {Blogpost} from '../blogpost';

@Component({
  selector: 'app-create-blogpost',
  templateUrl: './create-blogpost.component.html',
  styleUrls: ['./create-blogpost.component.scss', '../blog.component.scss']
})
export class CreateBlogpostComponent implements OnInit {
  createBlogpostForm: FormGroup;

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.createBlogpostForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, [Validators.required, Validators.minLength(50)])
    });
  }

  onSubmit() {
    const title = this.createBlogpostForm.value['title'];
    const content = this.createBlogpostForm.value['content'];
    const blogpost = new Blogpost(title, content);

    this.blogService.addPost(blogpost).subscribe(id => {
      this.router.navigate([id]);
    });

  }

  get title() {
    return this.createBlogpostForm.get('title');
  }

  get content() {
    return this.createBlogpostForm.get('content');
  }

}
