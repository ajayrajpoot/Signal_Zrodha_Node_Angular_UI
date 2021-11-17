import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ChartsModule } from 'ng2-charts';
import { HistoryComponent } from '../../component/history/history.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [NewsComponent,HistoryComponent],
  exports:[HistoryComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ChartsModule,
    PerfectScrollbarModule,

  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },]
})
export class NewsModule { }
