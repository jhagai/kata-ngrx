import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter = 0;

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}
