import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { PermitionComponent } from './permition/permition.component';
import { LevelsComponent } from './levels/levels.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyPermitionComponent } from './my-permition/my-permition.component';


@NgModule({
  declarations: [SettingComponent, PermitionComponent, LevelsComponent, MyPermitionComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingModule { }
