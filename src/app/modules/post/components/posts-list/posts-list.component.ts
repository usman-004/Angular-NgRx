import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { PostsModel } from '../../models/posts.model';
import { Observable } from 'rxjs';
import { postsSelector } from '../../state/posts.selectors';
import { PostsState } from '../../state/posts.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts!: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts = this.store.select(postsSelector);
  }
}
