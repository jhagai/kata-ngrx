import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterReduxComponent} from './pages/counter-redux/counter-redux.component';
import {CounterReduxRoutingModule} from "./counter-redux-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {counterFeature} from "./store/counter.feature";

@NgModule({
  declarations: [
    CounterReduxComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeature),
    CounterReduxRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})

export class CounterReduxModule {
}
