import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as PostsActions from './posts.actions';

import { map, mergeMap } from 'rxjs/operators';
import { PostsService } from '../posts.service';


@Injectable()
export class PostsEffects {


  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType(PostsActions.loadPosts)
    , mergeMap(() =>
      this.postService.getPosts().pipe(
        map(post => PostsActions.loadPostsSuccess({ posts: post }))
      )
    ));

  private _postService: PostsService;
  private _actions$: Actions;

  constructor(private actions$: Actions, private postService: PostsService) {
    this._actions$ = actions$;
    this._postService = postService;
  }
}
