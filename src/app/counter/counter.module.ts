import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterComponent} from './pages/counter/counter.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CounterRoutingModule} from "./counter-routing.module";


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CounterModule {
}
