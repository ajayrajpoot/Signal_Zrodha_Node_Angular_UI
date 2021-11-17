import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MentorComponent],
  imports: [
    CommonModule,
    MentorRoutingModule,ReactiveFormsModule
  ]
})
export class MentorModule { }
