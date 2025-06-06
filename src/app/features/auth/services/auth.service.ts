import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { URL_BASE } from '../../../tokens/url-base.token';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { adaptLoginResponse } from '../adapters/login.adapter';
import { LoginApiResponse } from '../models/login-api-response.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly httpClient = inject(HttpClient)
    private readonly URL_BASE = inject(URL_BASE)

    logIn(request: LoginRequest): Observable<LoginResponse> {
        return this.httpClient.post<LoginApiResponse>(`${this.URL_BASE}/auth/login`, request)
            .pipe(map(adaptLoginResponse))
    }
}
