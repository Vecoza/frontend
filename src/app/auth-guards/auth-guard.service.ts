import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {MyAuthService} from '../services/auth-services/my-auth.service';

export class AuthGuardData {
  isAdmin?: boolean;
  isUser?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  // implements CanActivate
  constructor(private authService: MyAuthService, private router: Router) {
  }

  canActivate(): boolean {
    const authInfo = this.authService.getMyAuthInfo();
    console.log('Auth Info in Guard:', authInfo);
    if (authInfo?.isLoggedIn) {
      return true; // Allow access if logged in
    }
    // Redirect to login if not logged in
    this.router.navigate(['/auth/login']);
    return false;
  }

  // canActivate(route: ActivatedRouteSnapshot): boolean {
  //   const guardData = route.data as AuthGuardData;  // Cast to AuthGuardData
  //
  //
  //   // Provjera da li je korisnik prijavljen
  //   /*
  //   if (!this.authService.isLoggedIn()) {
  //     this.router.navigate(['/auth/login']);
  //     return false;
  //   }*/
  //
  //   // Provjera prava pristupa za administratora
  //   if (guardData.isAdmin && !this.authService.isAdmin()) {
  //     this.router.navigate(['/unauthorized']);
  //     return false;
  //   }
  //
  //   // Provjera prava pristupa za menadžera
  //   if (guardData.isUser && !this.authService.isUser()) {
  //     this.router.navigate(['/unauthorized']);
  //     return false;
  //   }
  //
  //   return true; // Dozvoljen pristup
  // }

}
