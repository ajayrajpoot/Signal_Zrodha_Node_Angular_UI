import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignalComponent } from './signal.component';

const routes: Routes = [{ path: '', component: SignalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalRoutingModule { }
