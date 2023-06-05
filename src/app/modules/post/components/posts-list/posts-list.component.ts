import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PostsModel } from '../../models/posts.model';
import { Observable } from 'rxjs';
import { postsSelector } from '../../state/posts.selectors';
import { PostsState } from '../../state/posts.state';
import { deletePostAction } from '../../state/post.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts!: Observable<any>; // dont use any here ,resolve later on
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts = this.store.select(postsSelector);
  }

  onRemovePost(id: string) {
    if (confirm('Are you sure you want to delete ?')) {
      // console.log('deleted');
      this.store.dispatch(deletePostAction({ id }));
    }
  }
}
