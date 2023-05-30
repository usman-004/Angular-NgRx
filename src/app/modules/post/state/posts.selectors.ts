import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { PostsModel } from '../models/posts.model';
import { environment } from 'src/environments/environment';

const getInitialState = createFeatureSelector<AppState>(
  environment.POST_STATE_NAME
); //param 'state' should be same as used inside app.module.ts file.

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
