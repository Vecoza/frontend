import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MyAuthInfo} from "./dto/my-auth-info";
import {LoginTokenDto} from './dto/login-token-dto';

@Injectable(
  {providedIn: 'root'}
)

export class MyAuthService {

  constructor(private httpClient: HttpClient ) {
  }

  private tokenKey = 'my-auth-token';

  // getMyAuthInfo(): MyAuthInfo | null {
  //   return this.getLoginToken()?.myAuthInfo ?? null;
  // }
  //
  // isLoggedIn(): boolean {
  //   return this.getMyAuthInfo() != null && this.getMyAuthInfo()!.isLoggedIn;
  // }
  //
  // isAdmin(): boolean {
  //   return this.getMyAuthInfo()?.isAdmin ?? false;
  // }
  //
  // isUser(): boolean {
  //   return this.getMyAuthInfo()?.isUser ?? false;
  // }
  //
  // setLoggedInUser(x: LoginTokenDto | null) {
  //   if (x == null) {
  //     window.localStorage.setItem("my-auth-token", '');
  //     console.log('Stored auth token:', localStorage.getItem('my-auth-token'));
  //
  //   } else {
  //     window.localStorage.setItem("my-auth-token", JSON.stringify(x));
  //     console.log('Stored auth token:', localStorage.getItem('my-auth-token'));
  //
  //   }
  // }
  //
  // getLoginToken(): LoginTokenDto | null {
  //   let tokenString = window.localStorage.getItem("my-auth-token") ?? "";
  //   try {
  //     return JSON.parse(tokenString);
  //   } catch (e) {
  //     return null;
  //   }
  // }

  setLoggedInUser(data: { token: string; myAuthInfo: any }): void {
    localStorage.setItem('my-auth-token', data.token);
    localStorage.setItem('my-auth-info', JSON.stringify(data.myAuthInfo));
  }

  getMyAuthInfo(): any {
    const authInfo = localStorage.getItem('my-auth-info');
    return authInfo ? JSON.parse(authInfo) : null;
  }

  isAdmin(): boolean {
    const authInfo = this.getMyAuthInfo();
    return authInfo?.isAdmin || false;
  }

  isUser(): boolean {
    const authInfo = this.getMyAuthInfo();
    return authInfo?.isUser || false;
  }

  // Save the login token
  setLoginToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the login token
  getLoginToken(): { token: string } | null {
    const token = localStorage.getItem(this.tokenKey);
    return token ? { token } : null;
  }

  // Clear the token on logout
  clearLoginToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
