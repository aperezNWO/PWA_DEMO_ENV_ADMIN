import { Component, VERSION } from '@angular/core';
import { ConfigService } from '../../../_services/_config/config.service';

@Component({
  selector: 'app-tech-info',
  templateUrl: './tech-info.component.html',
  styleUrl: './tech-info.component.css'
})
export class TechInfoComponent {
    //
    _appBrand          : string | undefined;
    _appVersion        : string | undefined;
    _runtimeVersion    : string = VERSION.full;
     //
     constructor(
        public _configService     : ConfigService,
     )
    {
      ////
      this._appBrand           = this._configService.getConfigValue('appBrand_Long');
      this._appVersion         = this._configService.getConfigValue('appVersion');
    }
}