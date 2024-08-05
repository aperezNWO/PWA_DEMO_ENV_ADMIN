import { CanActivateFn, Router } from '@angular/router';
import { _environment          }  from '../../../environments/environment';
import { SiteRole              } from '../../_models/common/common';
import { inject                } from '@angular/core';
//
export const CanActivateGuard: CanActivateFn = (route, state) => {
  //
  const router = inject(Router);   
  //
  let canActivate : boolean = true;
  //
  let _route      : string = route.url.toString();
  //
  console.log('Route     : ' + _route);
  //
  console.log('State     : ' + state);
  //
  console.log('UserRole  : ' + _environment.currentUserRoles);
  //
  switch(_route) {
    case 'AngularReference' :
      canActivate = (_environment.currentUserRoles == SiteRole.RoleEducation.toString());
    break;
    case 'ConfigWeb' :
      canActivate = (_environment.currentUserRoles == SiteRole.RoleConfig.toString());
    break;
    case 'Marketing' :
      canActivate = (_environment.currentUserRoles == SiteRole.RoleMarketing.toString());
    break;
  };
  //
  if (canActivate==false) 
    return router.createUrlTree(['/protected']);  
  //
  return canActivate;
};

