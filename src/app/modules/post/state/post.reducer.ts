import { createReducer } from '@ngrx/store';
import { initialState } from './posts.state';

const _postReducer = createReducer(initialState);
export const postReducer = (state: any, action: any) => {
  return _postReducer(state, action);
};
