import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlanRoutingModule } from './my-plan-routing.module';
import { MyPlanComponent } from './my-plan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyPlanComponent],
  imports: [
    CommonModule,
    MyPlanRoutingModule,ReactiveFormsModule
  ]
})
export class MyPlanModule { }
