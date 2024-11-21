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
  loginRequest: LoginRequest = {username: 'admin1', password: 'admin123'};
  errorMessage: string | null = null;



  constructor(private authLoginService: AuthLoginEndpointService, private router: Router,
              private authService: MyAuthService) {
  }

  onLogin(): void {
    this.authLoginService.handleAsync(this.loginRequest).subscribe({
      next: () => {
        console.log('Login successful');
        const authInfo = this.authService.getMyAuthInfo(); // Use MyAuthService directly
        if (authInfo?.isAdmin) {
          this.router.navigate(['/admin']);
        } else if (authInfo?.isUser) {
          this.router.navigate(['/public']); // Redirect to public page for regular users
        } else {
          console.error('Unknown user role');
          this.router.navigate(['/unauthorized']); // Handle unknown roles
        }
      },
      error: (error: any) => {
        this.errorMessage = 'Incorrect username or password';
        console.error('Login error:', error);
      }
    });
  }
}
