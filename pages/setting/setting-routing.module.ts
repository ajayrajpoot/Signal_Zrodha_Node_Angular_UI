import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingComponent } from './setting.component';
import { PermitionComponent } from './permition/permition.component';
import { LevelsComponent } from './levels/levels.component';
import { MyPermitionComponent } from './my-permition/my-permition.component';

const routes: Routes = [{ path: '', component: SettingComponent,children:[
  {path:'permition',component:PermitionComponent},
  {path:'my-permition',component:MyPermitionComponent},
  {path:'levels',component:LevelsComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
