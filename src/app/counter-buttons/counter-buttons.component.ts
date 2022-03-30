import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit() {}

  OnIncrement() {
    this.store.dispatch(increment());
  }
  OnDecrement() {
    this.store.dispatch(decrement());
  }
  OnReset() {
    this.store.dispatch(reset());
  }
}
