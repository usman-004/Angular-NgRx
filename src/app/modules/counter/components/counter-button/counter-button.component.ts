import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterInterface } from '../../interface/counter.interface';
import { decrement, increment, reset } from '../../state/counter.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
