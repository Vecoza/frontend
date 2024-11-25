import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthLoginEndpointService, LoginRequest} from '../../../endpoints/auth-endpoints/auth-login-endpoint.service';
import {MyAuthService} from '../../../services/auth-services/my-auth.service';
import {MyConfig} from '../../../my-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginRequest: LoginRequest = { email: '', password: '' };
  errorMessage: string | null = null;




  constructor(private authLoginService: AuthLoginEndpointService, private router: Router,
              private authService: MyAuthService) {
  }

  //kurs



  ngOnInit():void{
    this.isLoggedIn();
  }

  creadentials : LoginRequest = {
    email: ' ',
    password: ' '
  };

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  login():void{
    this.authService.login(this.creadentials)
      .subscribe( () =>{
        console.log('login successfully');
        this.router.navigate(['/public/home']);
        }

      )
  }

  //------


  // onLogin(): void {
  //   this.authLoginService.handleAsync(this.loginRequest).subscribe({
  //     next: (response: any) => {
  //       console.log('Backend response:', response); // Debugging
  //
  //       // Handle unsuccessful login
  //       if (response.success === false) {
  //         this.errorMessage = response.message || 'Invalid username or password.';
  //         return;
  //       }
  //
  //       // Successful login, retrieve authentication info
  //       const authInfo = this.authService.getMyAuthInfo();
  //
  //       if (!authInfo) {
  //         this.errorMessage = 'Failed to retrieve user information.';
  //         return;
  //       }
  //
  //       // Redirect based on role
  //       if (authInfo.isAdmin) {
  //         this.router.navigate(['/admin/dashboard']);
  //       } else if (authInfo.isUser) {
  //         this.router.navigate(['/public/home']);
  //       } else {
  //         this.errorMessage = 'Unknown role. Contact support.';
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Login error:', error); // Debugging unexpected errors
  //       this.errorMessage = 'An error occurred during login. Please try again.';
  //     },
  //   });
  // }


  //radi
  // onLogin(): void {
  //   console.log('Login request:', this.loginRequest);
  //   this.authLoginService.handleAsync(this.loginRequest).subscribe({
  //     next: (response) => {
  //       if (response.success === false) {
  //         this.errorMessage = response.message || 'Invalid username or password.';
  //         return;
  //       }
  //
  //       // Save token and authentication info
  //       this.authService.setLoggedInUser({
  //         token: response.token,
  //         myAuthInfo: response.myAuthInfo,
  //       });
  //
  //       console.log('Auth Info:', response.myAuthInfo);
  //
  //       // if (!authInfo) {
  //       //   this.errorMessage = 'Failed to retrieve user information.';
  //       //   return;
  //       // }
  //       //
  //       // Redirect based on role
  //       if (response.myAuthInfo.isAdmin) {
  //         this.router.navigate(['/admin/dashboard']); // Admin dashboard
  //       } else if (response.myAuthInfo.isUser) {
  //         this.router.navigate(['/user/home']); // User home page
  //       } else {
  //         this.errorMessage = 'Unknown role. Contact support.';
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Login error:', error);
  //       this.errorMessage = 'An error occurred during login.';
  //     },
  //   });
  // }






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
