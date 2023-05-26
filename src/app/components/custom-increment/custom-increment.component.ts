import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { customIncrement, userName } from '../state/state.actions';
import { StateInterface } from 'src/app/interface/state.interface';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.css'],
})
export class CustomIncrementComponent implements OnInit {
  value!: number;
  constructor(private store: Store<{ state: StateInterface }>) {}
  ngOnInit(): void {}
  onCustomIncrement() {
    // this.store.dispatch(customIncrement({ value: +this.value }));
    this.store.dispatch(customIncrement({ countValue: +this.value }));
  }
}
