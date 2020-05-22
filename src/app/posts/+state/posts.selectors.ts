import {createFeatureSelector, createSelector} from '@ngrx/store';
import {postsAdapter, postsFeatureKey, PostsPartialState, State} from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
export const getPostsState = createFeatureSelector<PostsPartialState, State>(
 postsFeatureKey
);

const { selectAll, selectEntities } = postsAdapter.getSelectors();

export const getPostsLoaded = createSelector(
  getPostsState,
  (state: State) => state.loaded
);

export const getPostsError = createSelector(
  getPostsState,
  (state: State) => state.error
);

export const getAllPosts = createSelector(getPostsState, (state: State) =>
  selectAll(state)
);

export const getPostsEntities = createSelector(getPostsState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getPostsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPostsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
