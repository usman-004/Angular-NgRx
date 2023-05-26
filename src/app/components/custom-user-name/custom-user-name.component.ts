import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterInterface } from 'src/app/interface/counter.interface';
import { userName } from '../state/counter.actions';

@Component({
  selector: 'app-custom-user-name',
  templateUrl: './custom-user-name.component.html',
  styleUrls: ['./custom-user-name.component.css'],
})
export class CustomUserNameComponent implements OnInit {
  //add name property
  userName!: string;
  constructor(private store: Store<{ counter: counterInterface }>) {}

  ngOnInit(): void {
    //subscribe userName property here
    this.store.select('counter').subscribe((res) => {
      console.log('Username Update...');

      this.userName = res.userName;
    });
  }
  onUpdateUserName() {
    this.store.dispatch(userName());
  }
}
