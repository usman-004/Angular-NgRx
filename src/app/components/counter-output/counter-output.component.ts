import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterInterface } from 'src/app/interface/counter.interface';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  //make a observable
  counter$!: Observable<counterInterface>;
  //handle subscription
  counterSubscription!: Subscription;
  constructor(private store: Store<{ counter: counterInterface }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe((res) => {
      console.log('counter update...');
      this.counter = res.counter;
    });

    //in case dont want to use subscription
    // this.counter$ = this.store.select('counter');
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
