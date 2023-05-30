import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    // children: [{ path: 'addPost', component: AddPostComponent }], // don't use slash before path here
  },
  {
    path: 'addPost',
    component: AddPostComponent,
  },
  {
    path: 'updateForm/:id',
    component: PostFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
