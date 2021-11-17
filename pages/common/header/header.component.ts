import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() leftHeaderColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  @Input() headerHeight: number;
  @Input() collapsedLeftHeader: boolean;
  cuser: any;
  constructor( private layoutService: LayoutService,
    public gbls: GlobalService,
    ) {
      this.gbls.logedUser.subscribe(data => { 
        this.cuser = data;
      })
     }

  ngOnInit() {

  }
  changeTheToggleStatus() {
    this.layoutService.getToggleStatus();
  }
  login(url){
    localStorage.clear();
    this.redirect(url);
  }
  redirect(url) {
    this.gbls.redirect(url);
  }
}
