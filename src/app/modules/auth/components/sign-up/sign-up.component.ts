import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { registerStart } from '../../state/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private store: Store<AppState>, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  onSubmit() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.store.dispatch(registerStart({ email, password }));
  }
}
