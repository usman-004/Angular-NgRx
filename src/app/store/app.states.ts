import { CounterInterface } from '../modules/counter/interface/counter.interface';
import { PostsState } from '../modules/post/state/posts.state';

// not needed yet due to lazy loading
export interface AppState {
  counter: CounterInterface;
  posts: PostsState;
}
