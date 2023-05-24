import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  @Output() increment=new EventEmitter<number>();
  @Output() decrement=new EventEmitter<number>();
  @Output() reset=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onIncrement(){
    this.increment.emit();
  }
  onDecrement(){
    this.decrement.emit();
  }
  onReset(){
    this.reset.emit();
  }

}
