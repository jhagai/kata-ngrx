import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KataStoreModule} from "./store/kata-store.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgrxFormsModule} from "ngrx-forms";
import {HttpClientModule} from "@angular/common/http";
import {TodosModule} from "@todos/todos.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KataStoreModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgrxFormsModule,
    HttpClientModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
