import { Component                     } from '@angular/core';
import { ActivatedRoute, Router        } from '@angular/router';
import { Title                         } from '@angular/platform-browser';
import { ConfigService                 } from './_services/_config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  //
  title = 'NG_BOOTSTRAP_DEMO_ENV_LANDING';
  // propiedades publicas
  public readonly _title     : string | undefined = "";
  public readonly _appBrand  : string | undefined = "";
  public readonly _appVersion: string | undefined = "";
  redirectPage               : string | null | undefined; 
  //
  private navbarCollapsed: boolean = true;
  //
  public get NavbarCollapsed(): boolean {
    //
    return this.navbarCollapsed;
  }
  //
  public set NavbarCollapsed(p_navbarCollapsed: boolean) {
    //
    this.navbarCollapsed = p_navbarCollapsed;
  }

  constructor(
    private router         : Router,
    private route          : ActivatedRoute,
    private _configService : ConfigService,
    private titleService   : Title
  ) 
  {
    //
    this._appBrand    = this._configService.getConfigValue('appBrand');
    this._appVersion  = this._configService.getConfigValue('appVersion'); //
    let title: string = `${this._appBrand} - ${this._appVersion}`;
    //
    //console.log("Setting Title : " + title);
    //
    this._title = `${this._appBrand}`;
    //
    this.titleService.setTitle(title);
    //
    this.route.queryParams.subscribe(params => {
      //
      this.redirectPage = params['redirectPage'] ? params['redirectPage'] : "" ;
      //
      if (this.redirectPage !== undefined)
      {
        //
        //console.log("Redirecting To Page : "  +  this.redirectPage );
        //
        switch (this.redirectPage)
        {
          case "FeaturePages":
              // 
              this.router.navigateByUrl('/FeaturePages');
          break;
          //default : 
              //
          //    this.router.navigateByUrl("/Home");
          //break;
        };
      } else {
        //
        router.navigateByUrl("/Home");
      }
   });
  }
}
