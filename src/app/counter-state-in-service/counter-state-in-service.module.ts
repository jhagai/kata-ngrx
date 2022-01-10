import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterStateInServiceComponent} from './pages/counter-state-in-service/counter-state-in-service.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CounterService} from "./services/counter.service";
import {CounterStateInServiceRoutingModule} from "./counter-state-in-service-routing.module";


@NgModule({
  declarations: [
    CounterStateInServiceComponent
  ],
  imports: [
    CommonModule,
    CounterStateInServiceRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [{provide: CounterService}]
})
export class CounterStateInServiceModule {
}
