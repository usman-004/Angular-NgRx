import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { postReducer } from './state/post.reducer';
import { StoreModule } from '@ngrx/store';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [PostComponent, PostsListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    StoreModule.forFeature('posts', postReducer),
  ],
})
export class PostModule {}
