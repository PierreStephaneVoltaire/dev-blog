import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import * as PostsActions from './posts.actions';
import { PostsService } from '../posts.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      fetch({
        run: action => {
          return this.postService.getPosts().pipe(map(post => (PostsActions.loadPostsSuccess({ posts: post }))));
        },

        onError: (action, error) => {
          console.error('Error', error);
          return PostsActions.loadPostsFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostsService) {
  }
}
