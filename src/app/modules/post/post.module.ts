import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { postReducer } from './state/post.reducer';
import { StoreModule } from '@ngrx/store';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/post.effects';
@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent,
    AddPostComponent,
    PostFormComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(environment.POST_STATE_NAME, postReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostModule {}
