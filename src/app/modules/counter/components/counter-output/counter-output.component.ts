import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterInterface } from '../../interface/counter.interface';
import { counterSelector } from '../../state/counter.selectors';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  //make a observable
  counter$!: Observable<CounterInterface>;
  //handle subscription
  counterSubscription!: Subscription;
  constructor(private store: Store<AppState>) {}

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
