import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalRoutingModule } from './signal-routing.module';
import { SignalComponent } from './signal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignalComponent],
  imports: [
    CommonModule,
    SignalRoutingModule,ReactiveFormsModule
  ]
})
export class SignalModule { }
