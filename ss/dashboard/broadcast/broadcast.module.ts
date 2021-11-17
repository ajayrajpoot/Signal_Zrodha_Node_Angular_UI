import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastRoutingModule } from './broadcast-routing.module';
import { BroadcastComponent } from './broadcast.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BroadcastComponent],
  imports: [
    CommonModule,
    BroadcastRoutingModule,ReactiveFormsModule
  ]
})
export class BroadcastModule { }
