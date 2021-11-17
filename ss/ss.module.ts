import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsRoutingModule } from './ss-routing.module';
import { SsComponent } from './ss.component';
import { RestService } from '../service/rest.service';
import { GlobalService } from './service/global.service';
import { HistoryComponent } from './component/history/history.component';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';


import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [SsComponent,],
  imports: [
    CommonModule,
    SsRoutingModule,
    // PerfectScrollbarModule,
    LoadingBarModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [],
  providers: [
    GlobalService,
    RestService,
    LoadingBarService
  ]
})
export class SsModule { }
