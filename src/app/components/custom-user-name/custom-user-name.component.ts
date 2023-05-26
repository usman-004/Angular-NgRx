import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { userName } from '../state/state.actions';
import { StateInterface } from 'src/app/interface/state.interface';
import { userNameSelector } from '../state/state.selectors';

@Component({
  selector: 'app-custom-user-name',
  templateUrl: './custom-user-name.component.html',
  styleUrls: ['./custom-user-name.component.css'],
})
export class CustomUserNameComponent implements OnInit {
  //add name property
  userName!: string;
  constructor(private store: Store<{ state: StateInterface }>) {}

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
