import { createAction, props } from '@ngrx/store';
import { PostModel } from '../models/posts.model';

const ADD_POST: string = '[Post page] add post';
const ADD_POST_SUCCESS: string = '[Post page] add post';

const updatePost: string = '[Post Page] update Post';
const deletePost: string = '[Post Page] delete post';

const LOAD_POSTS: string = '[POST PAGE] load all posts...';
const LOAD_POSTS_SUCCESS: string = '[POST PAGE] load posts successfully...';

export const addPost = createAction(
  ADD_POST,
  props<{ post: PostModel }>() // props<{ count: number }>() keep in mind this at the end ()
);
export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: PostModel }>() // props<{ count: number }>() keep in mind this at the end ()
);

export const updatePostAction = createAction(
  updatePost,
  props<{ post: PostModel }>()
);

export const deletePostAction = createAction(
  deletePost,
  props<{ id: string }>()
);

export const loadAllPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: PostModel }>()
);
