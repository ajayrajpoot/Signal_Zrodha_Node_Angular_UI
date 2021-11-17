import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../service/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count: any = {
    Email_Unverification: 0,
    Email_Verification: 0,
    Phone_Unverification: 0,
    Phone_Verification: 0,
    Total_User: 0,
    User_Active: 0,
    User_Deactivate: 0
  }
  cuser: any;

  constructor(
    public gbl: GlobalService

  ) {
    this.gbl.logedUser.subscribe(data => { 
      this.cuser = data;
    })
    this.USER_COUNT();
  }

  ngOnInit() {
  }

  USER_COUNT() {
    this.gbl.USER_COUNT({}).subscribe(data => {
      this.count = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
