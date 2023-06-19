import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/posts.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // firebase url
  baseUrl: string =
    'https://ngrx-effects-auth-default-rtdb.firebaseio.com/posts.json';

  // json placeholder url
  // baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  // getAllPosts() {
  //   return this.http.get(this.baseUrl);
  // }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseUrl).pipe(
      map((data) => {
        // console.log(data);

        const posts: PostModel[] = [];
        for (let key in data) {
          posts.push({ ...data[key], id: key });
        }
        return posts;
      })
    );
  }

  addPost(post: PostModel): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.baseUrl, post);
  }
}
