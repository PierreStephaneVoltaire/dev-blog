import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostsEntity } from './posts/+state/posts.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<PostsEntity[]> {
    return this.http.get<PostsEntity[]>('http://localhost:3000/posts');
  }

}
