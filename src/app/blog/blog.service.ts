import { Injectable } from '@angular/core';
import {Blogpost} from './blogpost';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {
  }

  endpoint = '/api'; // Check proxy.conf.json file for more

  addPost(blogPost: Blogpost) {
    return this.http.post<number>(this.endpoint, blogPost, { withCredentials: true }).pipe(first());
  }

  getPost(id: number) {
    return this.http.get<Blogpost>(this.endpoint + '/' + id, { withCredentials: true }).pipe(first());
  }

  updatePost(id: number, blogPost: Blogpost) {
    return this.http.put<Blogpost>(this.endpoint + '/' + id, blogPost, { withCredentials: true }).pipe(first());
  }

  removePost(id: number) {
    return this.http.delete<Blogpost>(this.endpoint + '/' + id, { withCredentials: true }).pipe(first());
  }

  getAllPosts() {
    return this.http.get<Blogpost[]>(this.endpoint, { withCredentials: true }).pipe(first());
  }
}
