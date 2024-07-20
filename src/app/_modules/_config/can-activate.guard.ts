import { CanActivateFn } from '@angular/router';

export const CanActivateGuard: CanActivateFn = (route, state) => {
  //
  console.log('Route : ' + route.url.toString());
  //
  console.log('State : ' + state);
  //
  let canActivate : boolean = true;
  //
  if (route.url.toString() == 'Marketing')
    return false;
  //
  return canActivate;
};

