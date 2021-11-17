import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySignalRoutingModule } from './my-signal-routing.module';
import { MySignalComponent } from './my-signal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MySignalComponent],
  imports: [
    CommonModule,
    MySignalRoutingModule,ReactiveFormsModule
  ]
})
export class MySignalModule { }
