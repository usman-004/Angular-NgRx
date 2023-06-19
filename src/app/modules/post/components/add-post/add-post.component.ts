import { addPost } from './../../state/post.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostModel } from '../../models/posts.model';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('addPosts...');

    this.postForm = this._fb.group({
      title: [null, [Validators.required, Validators.minLength(6)]],
      description: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  showDescriptionErrors() {
    const descriptionForm = this.postForm.controls['description'];
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.hasError('required')) {
        return 'Description is required';
      }
      if (descriptionForm.hasError('minlength')) {
        return 'Description should be of minimum 10 characters length';
      }
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    // console.log(this.postForm.value);

    const post: PostModel = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post })); //1. don't miss curly braces! 2. Is there object inside object ?

    //list update
    this.router.navigate(['/posts']);
    return;
  }
}
