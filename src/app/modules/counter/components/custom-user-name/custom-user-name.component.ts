import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterInterface } from '../../interface/counter.interface';
import { userNameSelector } from '../../state/counter.selectors';
import { userName } from '../../state/counter.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-custom-user-name',
  templateUrl: './custom-user-name.component.html',
  styleUrls: ['./custom-user-name.component.css'],
})
export class CustomUserNameComponent implements OnInit {
  //add name property
  userName!: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //subscribe userName property here
    this.store.select(userNameSelector).subscribe((res) => {
      console.log('Username Update...');
      this.userName = res;
    });
  }
  onUpdateUserName() {
    this.store.dispatch(userName());
  }
}
