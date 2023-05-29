import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CustomIncrementComponent } from './components/custom-increment/custom-increment.component';
import { CustomUserNameComponent } from './components/custom-user-name/custom-user-name.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CustomIncrementComponent,
    CustomUserNameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterRoutingModule,
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class CounterModule {}
