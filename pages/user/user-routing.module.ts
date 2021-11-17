import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'dashboard', component: UserComponent }, 
  { path: 'message', component: MessagesComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
