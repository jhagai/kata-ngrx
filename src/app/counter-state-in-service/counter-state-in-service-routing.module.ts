import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterStateInServiceComponent} from "./pages/counter-state-in-service/counter-state-in-service.component";

const routes: Routes = [
  {
    path: '',
    component: CounterStateInServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterStateInServiceRoutingModule {
}
