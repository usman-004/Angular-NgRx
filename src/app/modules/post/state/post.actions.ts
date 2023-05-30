import { createAction, props } from '@ngrx/store';
import { PostsModel } from '../models/posts.model';

const addPost: string = '[Post page] add post';
const updatePost: string = '[Post Page] update Post';
const deletePost: string = '[Post Page] delete post';

export const createPost = createAction(
  addPost,
  props<{ post: PostsModel }>() // props<{ count: number }>() keep in mind
);

export const updatePostAction = createAction(
  updatePost,
  props<{ post: PostsModel }>()
);

export const deletePostAction = createAction(
  deletePost,
  props<{ id: string }>()
);
