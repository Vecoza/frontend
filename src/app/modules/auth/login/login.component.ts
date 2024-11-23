import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthLoginEndpointService, LoginRequest} from '../../../endpoints/auth-endpoints/auth-login-endpoint.service';
import {MyAuthService} from '../../../services/auth-services/my-auth.service';
import {MyConfig} from '../../../my-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: LoginRequest = { username: '', password: '' };
  errorMessage: string | null = null;



  constructor(private authLoginService: AuthLoginEndpointService, private router: Router,
              private authService: MyAuthService) {
  }

  onLogin(): void {
    this.authLoginService.handleAsync(this.loginRequest).subscribe({
      next: () => {
        const authInfo = this.authService.getMyAuthInfo();

        // Redirect based on role
        if (authInfo?.isAdmin) {
          this.router.navigate(['/admin/dashboard']);
        } else if (authInfo?.isUser) {
          this.router.navigate(['/public/home']);
        } else {
          console.error('Unknown role');
          // this.router.navigate(['/unauthorized']);
        }
      },
      error: () => {
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }



  // onLogin(): void {
  //   this.authLoginService.handleAsync(this.loginRequest).subscribe({
  //     next: () => {
  //       const authInfo = this.authService.getMyAuthInfo(); // Ensure this retrieves the updated myAuthInfo
  //       if (authInfo?.isAdmin) {
  //         this.router.navigate(['/admin/dashboard']);
  //       } else if (authInfo?.isUser) {
  //         this.router.navigate(['/public/home']);
  //       } else {
  //         console.error('Unknown role');
  //         this.router.navigate(['/unauthorized']);
  //       }
  //     },
  //     error: (error: any) => {
  //       this.errorMessage = 'Incorrect username or password';
  //       console.error('Login error:', error);
  //     }
  //   });
  // }

  // private navigateBasedOnRole(authInfo: any): void {
  //   if (authInfo?.isAdmin) {
  //     this.router.navigate(['/admin/dashboard']);
  //   } else if (authInfo?.isUser) {
  //     this.router.navigate(['/public/home']);
  //   } else {
  //     this.router.navigate(['/unauthorized']);
  //   }
  // }
}
