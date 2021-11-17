import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MENUMASTERComponent } from './menu-master/menu-master.component';
import { MENUROLEComponent } from './menu-role/menu-role.component';
import { MANAGEMENUROLEComponent } from './manage-menu-role/manage-menu-role.component';

const routes: Routes = [
  { path: '', component: MenuComponent,children:[
    {path:'menumaster',component:MENUMASTERComponent},
    {path:'menurole',component:MENUROLEComponent},
    {path:'managemenurole',component:MANAGEMENUROLEComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
