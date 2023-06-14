import { createAction, props } from '@ngrx/store';
import { PostModel } from '../models/posts.model';

const addPost: string = '[Post page] add post';
const updatePost: string = '[Post Page] update Post';
const deletePost: string = '[Post Page] delete post';

const LOAD_POSTS: string = '[POST PAGE] load all posts...';
const LOAD_POSTS_SUCCESS: string = '[POST PAGE] load posts successfully...';

export const createPost = createAction(
  addPost,
  props<{ post: PostModel }>() // props<{ count: number }>() keep in mind
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
