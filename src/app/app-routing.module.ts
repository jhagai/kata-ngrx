import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule),
  },
  {
    path: 'counter-state-in-service',
    loadChildren: () => import('./counter-state-in-service/counter-state-in-service.module').then(m => m.CounterStateInServiceModule),
  },
  {
    path: 'counter-redux',
    loadChildren: () => import('./counter-redux/counter-redux.module').then(m => m.CounterReduxModule),
  },
  /*{
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
  },*/
  {path: '**', redirectTo: '/counter', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
