import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromPosts from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

@Injectable()
export class PostsFacade {
  loaded$ = this.store.pipe(select(PostsSelectors.getPostsLoaded));
  allPosts$ = this.store.pipe(select(PostsSelectors.getAllPosts));
  selectedPosts$ = this.store.pipe(select(PostsSelectors.getSelected));

  constructor(private store: Store<fromPosts.PostsPartialState>) {
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
