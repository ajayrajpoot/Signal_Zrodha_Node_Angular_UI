import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  cUrl: any;
  cRowIndex: any;
  eventmql5History: any={MoreRows:false,Rows:[]};

  constructor(public gbl: GlobalService) {
    this.mql5history('/en/economic-calendar/widget/china/ppi-yy',0)
   }

  ngOnInit(): void {
  }
  mql5history(url,index) {
    this.cUrl=url;
    this.cRowIndex=index;
    if(url==null){
      this.gbl.tostError("Null URL");
      return null;
    }
    var p1 = {
      url: url,
      from:index,
      count:20
    }
    this.gbl.mql5history(p1).subscribe(data => {
      this.eventmql5History = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
