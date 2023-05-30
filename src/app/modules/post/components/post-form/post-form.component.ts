import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsModel } from '../../models/posts.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { getPostById } from '../../state/posts.selectors';
import { updatePostAction } from '../../state/post.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  post!: PostsModel;
  updateForm!: FormGroup;
  postSubscription!: Subscription;
  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      // console.log(id);

      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          console.log(this.post);

          this.createForm();
        });
    });
  }

  createForm() {
    this.updateForm = this._fb.group({
      title: [this.post.title, [Validators.required, Validators.minLength(6)]],
      description: [
        this.post.description,
        [Validators.required, Validators.minLength(10)],
      ],
    });
  }
  onUpdatePost() {
    if (!this.updateForm.valid) return;

    const post: PostsModel = {
      id: this.post.id,
      title: this.updateForm.value.title,
      description: this.updateForm.value.description,
    };
    this.store.dispatch(updatePostAction({ post }));

    //redirect to postsList
    this.router.navigate(['/posts']);
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
