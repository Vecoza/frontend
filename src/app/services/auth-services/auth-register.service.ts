import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegisterRequest} from '../../modules/auth/register/register-request.modul';


@Injectable({
  providedIn: 'root',
})
export class AuthRegisterService {
  private apiUrl = 'http://your-api-url/api/auth/register'; // Update this URL

  constructor(private httpClient: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<void> {
    return this.httpClient.post<void>(this.apiUrl, registerRequest);
  }
}