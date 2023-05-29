import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';

const getInitialState = createFeatureSelector<AppState>('posts'); //param 'state' should be same as used inside app.module.ts file.

export const postsSelector = createSelector(getInitialState, (state) => {
  return state.posts;
});
