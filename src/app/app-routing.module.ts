import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./modules/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
