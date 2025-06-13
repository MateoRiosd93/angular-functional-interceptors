import { LoginApiResponse } from '../models/login-api-response.model';
import { LoginResponse } from '../models/login-response.model';

export const adaptLoginResponse = (response: LoginApiResponse): LoginResponse => ({
    accessToken: response.accessToken,
    username: response.username,
    email: response.email,
    gender: response.gender,
    image: response.image,
})