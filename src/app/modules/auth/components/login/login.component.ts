import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { loginStart } from '../../state/auth.action';
import { AppState } from 'src/app/store/app.states';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private store: Store<AppState>, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return 0;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart({ email, password }));
  }

  get f() {
    return this.loginForm.controls;
  }
}
