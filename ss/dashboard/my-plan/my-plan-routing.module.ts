import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlanComponent } from './my-plan.component';

const routes: Routes = [{ path: '', component: MyPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlanRoutingModule { }
