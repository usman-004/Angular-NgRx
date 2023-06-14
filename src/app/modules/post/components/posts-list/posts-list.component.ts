import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PostModel } from '../../models/posts.model';
import { Observable } from 'rxjs';
import { getPostsSelector } from '../../state/posts.selectors';
import { PostsState } from '../../state/posts.state';
import { deletePostAction, loadAllPosts } from '../../state/post.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts!: Observable<any>; //dont use any as a datatype
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts = this.store.select(getPostsSelector);
    this.store.dispatch(loadAllPosts());
  }

  onRemovePost(id: any) {
    //avoid any
    if (confirm('Are you sure you want to delete ?')) {
      // console.log('deleted');
      this.store.dispatch(deletePostAction({ id }));
    }
  }
}
