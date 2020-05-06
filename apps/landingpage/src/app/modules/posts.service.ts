import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostsEntity } from './posts/+state/posts.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<PostsEntity[]> {
    return this.http.get<PostsEntity[]>('http://prod.api.despairdrivendevelopment.net/api/post').pipe(map(entities => {
      return entities.map(ent => Object.assign({ id: ent.PostID }, ent)
      );
    }));
  }

}
