import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';

export const POSTS_FEATURE_KEY = 'posts';

export interface State extends EntityState<PostsEntity> {
  selectedId?: string | number; // which Posts record has been selected
  loaded: boolean; // has the Posts list been loaded
  error?: string | null; // last none error (if any)
  posts:[]
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: State;
}

export const postsAdapter: EntityAdapter<PostsEntity> = createEntityAdapter<PostsEntity>();

export const initialState: State = postsAdapter.getInitialState({
  // set initial required properties
  loaded: false,posts:[]
});

const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.addAll(posts, { ...state, loaded: true })
  ),
  on(PostsActions.SelectPost, (state, { selectedId }) => ({
    ...state,
    selectedId: selectedId
  })),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return postsReducer(state, action);
}
