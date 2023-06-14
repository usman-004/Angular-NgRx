import { createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { AppState } from 'src/app/store/app.states';

export const POSTS_STATE_NAME = 'posts';

const getInitialState = createFeatureSelector<AppState>(
  environment.POST_STATE_NAME
);

export const craetePostSelector = createSelector(getInitialState, (state) => {
  return state.posts;
});

export const getPostsSelector = createSelector(getInitialState, (state) => {
  return state.posts;
});
// get post by id
export const getPostById = createSelector(
  // remove any later on (pending)
  getInitialState,
  (state: any, props: any) => {
    return state.posts.find((post: any) => post.id == props.id);
  }
);
