import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent implements OnInit {
  // @Output() increment=new EventEmitter<number>();
  // @Output() decrement=new EventEmitter<number>();
  // @Output() reset=new EventEmitter<number>();
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {}
  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }
  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }
  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
