import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MENUROLEComponent } from './menu-role/menu-role.component';
import { MENUMASTERComponent } from './menu-master/menu-master.component';
import { MANAGEMENUROLEComponent } from './manage-menu-role/manage-menu-role.component';


@NgModule({
  declarations: [MenuComponent, MENUROLEComponent, MENUMASTERComponent, MANAGEMENUROLEComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
