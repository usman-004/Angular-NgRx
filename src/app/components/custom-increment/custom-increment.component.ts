import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterInterface } from 'src/app/interface/counter.interface';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.css'],
})
export class CustomIncrementComponent implements OnInit {
  value!: number;
  constructor(private store: Store<{ counter: counterInterface }>) {}

  ngOnInit(): void {}
  onCustomIncrement() {
    // this.store.dispatch(customIncrement({ value: +this.value }));
    this.store.dispatch(customIncrement({ counter: +this.value }));
  }
}
