import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsComponent } from './ss.component';

const routes: Routes = [{
  path: '', component: SsComponent, children: [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsRoutingModule { }
