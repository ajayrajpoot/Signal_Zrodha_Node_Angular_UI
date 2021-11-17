import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySignalComponent } from './my-signal.component';

const routes: Routes = [{ path: '', component: MySignalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySignalRoutingModule { }
