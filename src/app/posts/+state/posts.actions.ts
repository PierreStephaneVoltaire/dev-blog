import { createAction, props } from '@ngrx/store';
import { PostsEntity } from './posts.models';

export const loadPosts = createAction('[Posts] Load Posts');

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: PostsEntity[] }>()
);

export const SelectPost = createAction(
  '[Posts] Select Post',
  props<{ selectedId: number | string }>()
);


export const loadPostsFailure = createAction(
  '[Posts] Load Posts Failure',
  props<{ error: any }>()
);
