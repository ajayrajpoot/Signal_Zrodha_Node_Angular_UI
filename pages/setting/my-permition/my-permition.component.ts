import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-my-permition',
  templateUrl: './my-permition.component.html',
  styleUrls: ['./my-permition.component.scss']
})
export class MyPermitionComponent implements OnInit {
  ULPermition: any;
  cuser: any;

  constructor(
    public gbl: GlobalService) {
    this.gbl.logedUser.subscribe(data => {
      this.cuser = data;
      this.GET_PERMITION_BY_LEVEL_ID(data.USER_TYPE);
    })
  }
  ngOnInit(): void {
  }
  GET_PERMITION_BY_LEVEL_ID(level_id) {
    this.gbl.GET_PERMITION_BY_LEVEL_ID({ level_id: level_id }).subscribe(data => {
      this.ULPermition = data.DtResult;
      // var s='';
      // this.ULPermition.forEach(el => {
      //   s+="<li>"+el.permission+"</li>"
      // });
      //  return s;
      // } else {      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
