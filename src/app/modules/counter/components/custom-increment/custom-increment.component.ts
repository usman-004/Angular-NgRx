import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterInterface } from '../../interface/counter.interface';
import { customIncrement } from '../../state/counter.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.css'],
})
export class CustomIncrementComponent implements OnInit {
  value!: number;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}
  onCustomIncrement() {
    // this.store.dispatch(customIncrement({ value: +this.value }));
    this.store.dispatch(customIncrement({ countValue: +this.value }));
  }
}
