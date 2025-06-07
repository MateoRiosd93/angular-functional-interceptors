import { computed, inject, Injectable, signal } from "@angular/core";
import { initialUserState, UserState } from "../models/user-state.model";
import { AuthService } from "../services/auth.service";
import { LoginRequest } from "../models/login-request.model";

@Injectable({providedIn: 'root'})
export class UserStore {
    private readonly authService = inject(AuthService)
    private readonly state = signal<UserState>(initialUserState)

    // Computed signals
    readonly userState = computed(() => this.state())

    logIn(request: LoginRequest){
        this.authService.logIn(request).subscribe({
            next: this.state.set,
            error: console.error
            
        })
    }
}