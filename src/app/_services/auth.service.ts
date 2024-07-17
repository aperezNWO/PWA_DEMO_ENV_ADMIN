import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

const authConfig = {
  // Replace with your provider's details
  issuer: 'https://your-oauth-provider.com/auth/realms/your-realm',
  clientId: 'your-client-id',
  redirectUri: 'http://localhost:4200/callback', // Adjust port if needed
  responseType: 'code',
  scope: 'openid profile email offline_access', // Adjust scopes as needed
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any;
  constructor(
    private http: HttpClient,
    @Inject(OAuthService) private oauthService: OAuthService
  ) {
    this.oauthService.configure(authConfig);
    this.oauthService.initImplicitFlow();
  }

  canActivate(): boolean {
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  // Methods for login, logout, retrieving user info, access token, etc. (see below)
}