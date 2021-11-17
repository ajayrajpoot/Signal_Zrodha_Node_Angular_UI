import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class WalletModule { }
