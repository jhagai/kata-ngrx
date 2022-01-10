import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterReduxComponent} from "./pages/counter-redux/counter-redux.component";

const routes: Routes = [
  {
    path: '',
    component: CounterReduxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterReduxRoutingModule {
}
