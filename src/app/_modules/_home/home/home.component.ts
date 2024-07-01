import { Component, OnInit, ViewChild            } from '@angular/core';
import { NavComponent                            } from '../nav/nav.component';
import { ConfigService                           } from '../../../_services/config.service';
//
@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //
  public _appBrand            : string | undefined = '';
  pageTitle                   : string             = '[HOME]';
  static PageTitle            : string             = '[HOME]';
  //
  constructor(private _configService: ConfigService)
  {
      //
      console.log(this.pageTitle + " - [INGRESO]") ;
      //
      this._appBrand  = this._configService.getConfigValue('appBrand');
  }
  //
  ngOnInit(): void {
    //
  }
}