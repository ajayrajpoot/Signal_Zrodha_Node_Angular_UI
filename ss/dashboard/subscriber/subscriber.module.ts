import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberComponent } from './subscriber.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubscriberComponent],
  imports: [
    CommonModule,
    SubscriberRoutingModule,ReactiveFormsModule
  ]
})
export class SubscriberModule { }
