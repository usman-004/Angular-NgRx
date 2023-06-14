import { PostModel } from '../models/posts.model';

export interface PostsState {
  posts: PostModel[];
}

export const initialState: PostsState = {
  // posts: [
  //   { id: '1', title: 'Sample Title 1', description: 'Sample Description 1' },
  //   { id: '2', title: 'Sample Title 1', description: 'Sample Description 1' },
  // ],
  posts: [],
};
