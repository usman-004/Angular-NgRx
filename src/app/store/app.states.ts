import { CounterInterface } from '../modules/counter/interface/counter.interface';
import { counterReducer } from '../modules/counter/state/counter.reducers';
import { postReducer } from '../modules/post/state/post.reducer';
import { PostsState } from '../modules/post/state/posts.state';
//
import { SharedInterface } from './interface/shared.interface';
import { SharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selectors';

export interface AppState {
  [SHARED_STATE_NAME]: SharedInterface;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
};

// // not needed yet due to lazy loading (before shared folder/states)
// export interface AppState {
//   counter: CounterInterface;
//   posts: PostsState;
// }
// export interface AppReducer {
//   counterReducer: typeof counterReducer;
//   postsReducer: typeof postReducer;
// }
