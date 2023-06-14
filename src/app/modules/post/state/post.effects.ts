import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { PostService } from '../services/post.service';
import { PostModel } from '../models/posts.model';
import { loadAllPosts, loadPostsSuccess } from './post.actions';
@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllPosts),
      mergeMap((action) => {
        return this.postService.getPosts().pipe(
          map((posts: any) => {
            //remove (any) datatype from here
            return loadPostsSuccess({ posts });
          })
        );
      })
    );
  });
}
