import { AppState } from './../../../store/app.states';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

const getInitialState = createFeatureSelector<AppState>(
  environment.POST_STATE_NAME
);

export const postsSelector = createSelector(getInitialState, (state) => {
  return state.posts;
});

//get post by id
export const getPostById = createSelector(
  // remove any later on (pending)
  getInitialState,
  (state: any, props: any) => {
    return state.posts.find((post: any) => post.id == props.id);
  }
);
