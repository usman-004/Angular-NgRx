import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import {
  deletePostAction,
  updatePostAction,
  loadPostsSuccess,
  addPost,
} from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    console.log(action);

    let post = { ...action.post };
    // post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostAction, (state: any, action: any) => {
    // remove all any type later on ...
    const updatedPost = state.posts.map((post: any) =>
      post.id == action.post.id ? action.post : post
    );
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePostAction, (state, action) => {
    const updatedLists = state.posts.filter((post) => post.id != action.id);
    return {
      ...state,
      posts: updatedLists,
    };
  }),
  on(loadPostsSuccess, (state: any, action: any) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);
export const postReducer = (state: any, action: any) => {
  return _postReducer(state, action);
};
