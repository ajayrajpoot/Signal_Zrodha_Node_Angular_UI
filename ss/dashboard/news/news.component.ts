import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable } from 'rxjs';
//var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [65, 58, 80, 82, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  config: any = {};

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  eventmql5: any;
  eventmql5History: any = { MoreRows: false, Rows: [] };
  constructor(public http: HttpClient, public gbl: GlobalService,
    // private loadingBar: LoadingBarService
  ) {

    // const observable = Observable.create(observer => {
    //   console.log('Text inside an observable');
    //   observer.next('Hello world!');
    //   observer.complete();
    // });
    // console.log('Before subscribing an Observable0');
    // observable.subscribe((message)=> console.log(message));

    // this.getdata();
    // this.mql5previousweek();
    // this.mql5nextweek();

    // this.mql5currentweek();
    // this.makeChert();



    // const observable1 = Observable.create(observer => {
    //   setTimeout(()=>{
    //       observer.next('Hello world');
    //       observer.complete();
    //   },3000)
    // });
    // console.log('Before calling subscribe on an Observable');
    // observable1.subscribe((data)=> console.log(data));
    // console.log('After calling subscribe on an Observable');


    const promise = new Promise((resolve, reject) => {
      console.log('Text inside promise');
      setTimeout(() => {
        resolve('Hello world!');
      }, 3000)
    });

    console.log('Before calling then method on Promise');
    promise.then(message => console.log(message));
    console.log('After calling then method on Promise');

  }

  ngOnInit(): void {
  }


  getDetail(url, cRowIndex) {
    this.mql5history(url, cRowIndex);
  }
  getdata() {
    this.http.get<any>("https://www.zeebiz.com/world/economy").subscribe(data => {
      console.log(">>>PageData>", data);
    });
  }
  mql5currentweek() {
    var p1 = {}
    this.gbl.mql5currentweek(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  mql5previousweek() {
    var p1 = {
    }
    this.gbl.mql5previousweek(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  mql5nextweek() {
    var p1 = {
    }
    this.gbl.mql5nextweek(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  mql5currentmonth() {
    var p1 = {
    }
    this.gbl.mql5currentmonth(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  mql5previousmonth() {
    var p1 = {
    }
    this.gbl.mql5previousmonth(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  mql5nexttmonth() {
    var p1 = {
    }
    this.gbl.mql5nexttmonth(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  mql5calendarbydate() {
    var p1 = {
      date_mode: '1',
      from: '',
      to: ''
    }
    this.gbl.mql5calendarbydate(p1).subscribe(data => {
      this.eventmql5 = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  cUrl: any = '';
  cRowIndex: any = 0
  mql5history(url, index) {
    this.cUrl = url;
    this.cRowIndex = index;
    if (url == null) {
      this.gbl.tostError("Null URL");
      return null;
    }
    var p1 = {
      url: url,
      from: index,
      count: 20
    }
    this.gbl.mql5history(p1).subscribe(data => {
      this.eventmql5History = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }


  makeChert() {

    this.lineChartData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [65, 58, 80, 82, 56, 55, 40], label: 'Series A' },
    ];
    var data = [65, 59, 80, 81, 56, 55, 40];
    var meandata = [];
    for (var i = 0; i < data.length; i++) {
      if (i < data.length - 3) {

        meandata.push((data[i] + data[i + 1] + data[i + 2]) / 3);
      } else {
        meandata.push((data[i]));
      }
    }
    this.lineChartData = [
      { data: data, label: 'Series A' },
      { data: meandata, label: 'Mean A' },
    ];
    console.log("data", data)
    console.log("meandata", meandata)
  }











}
