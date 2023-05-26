import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StateInterface } from 'src/app/interface/state.interface';
import { counterSelector } from '../state/state.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  //make a observable
  counter$!: Observable<StateInterface>;
  //handle subscription
  counterSubscription!: Subscription;
  constructor(private store: Store<{ state: StateInterface }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select(counterSelector)
      .subscribe((res) => {
        console.log('counter update...');
        this.counter = res;
      });

    //in case dont want to use subscription
    // this.counter$ = this.store.select('state');
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
