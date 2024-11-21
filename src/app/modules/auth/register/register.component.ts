import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {RegisterRequest} from './register-request.modul';
import {AuthRegisterService} from '../../../services/auth-services/auth-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Data model for the form
  registerRequest: RegisterRequest = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    password: '',
    createdAt: "2024-11-21T15:25:45.967Z",
    updatedAt: "2024-11-21T15:25:45.967Z",
    dateOfBirth: "2024-11-21T15:25:45.967Z",
  };

  errorMessage: string | null = null;

  constructor(private registerService: AuthRegisterService, private router: Router) {}

  onSubmit(): void {
    // Validate data (optional)
    console.log(this.registerRequest);
    if (this.registerRequest.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long.';
      return;
    }

    // Call the service to send the data to the backend
    this.registerService.register(this.registerRequest).subscribe({
      next: () => {
        console.log('Registration successful');
        this.router.navigate(['/login']); // Redirect to login
      },
      error: (error) => {
        console.error('Registration error:', error);
        this.errorMessage = 'An error occurred during registration.';
      },
    });
  }
}
