import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailerRoutingModule } from './mailer-routing.module';
import { MailerComponent } from './mailer.component';
import { SmtpComponent } from './smtp/smtp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MailersComponent } from './mailers/mailers.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [MailerComponent, SmtpComponent, MailersComponent],
  imports: [
    CommonModule,
    MailerRoutingModule,
    ReactiveFormsModule,FormsModule,
    AngularEditorModule
  ]
})
export class MailerModule { }
