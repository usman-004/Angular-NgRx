import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/state/counter.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
