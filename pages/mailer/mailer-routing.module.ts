import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailerComponent } from './mailer.component';
import { SmtpComponent } from './smtp/smtp.component';
import { MailersComponent } from './mailers/mailers.component';

const routes: Routes = [ 
  { path: '', component: MailerComponent ,children:[
  { path: '', component: SmtpComponent }, 
  { path: 'smtp', component: SmtpComponent }, 
  { path: 'mailers', component: MailersComponent },
  ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailerRoutingModule { }
