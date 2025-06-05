import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CredentialsRequest } from '../models/credentials-request';
import { URL_BASE } from '../../../tokens/url-base.token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly httpClient = inject(HttpClient)
  private readonly URL_BASE = inject(URL_BASE)

  logIn(credentials: CredentialsRequest) {
    return this.httpClient.post(`${this.URL_BASE}/auth/login`, credentials)
  }
}
