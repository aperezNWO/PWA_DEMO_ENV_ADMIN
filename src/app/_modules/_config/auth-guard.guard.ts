import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

/*

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
  
*/
