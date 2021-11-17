import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    PlanRoutingModule,ReactiveFormsModule
  ]
})
export class PlanModule { }
