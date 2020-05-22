import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as PostsActions from './posts.actions';

import {flatMap, map, mapTo, mergeMap, switchMap} from 'rxjs/operators';
import {PostsService} from "../posts.service";


@Injectable()
export class PostsEffects {


  @Effect()
  loadPosts$ = this.actions$.pipe(
      ofType(PostsActions.loadPosts)
        ,  mergeMap(() =>
        this.postService.getPosts().pipe(
          map(post=>PostsActions.loadPostsSuccess({posts: post}))
        ),
    ),)

  private _postService: PostsService;


  constructor(private actions$: Actions, private postService: PostsService) {
 this._actions$=actions$;
 this._postService=postService;
  }

private _actions$: Actions;
}
