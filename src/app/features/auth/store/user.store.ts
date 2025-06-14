import { computed, inject, Injectable, signal } from "@angular/core";
import { initialUserState, UserState } from "../models/user-state.model";
import { AuthService } from "../services/auth.service";
import { LoginRequest } from "../models/login-request.model";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserStore {
    private readonly authService = inject(AuthService)
    private readonly state = signal<UserState>(initialUserState)

    // Computed signals
    readonly userState = computed(() => this.state())

    // Hacemos que la accion del store retorne un observable y asi le delegamos al
    // componente que realice la subscripcion y haga lo que necesite segun la respuesta.
    // Utilizamos un .pipe() que recibe operadores y en este caso usamos tap() que lo que 
    // hace es como transformar la respuesta o en este caso devolver la que nos retorna el service
    logIn(request: LoginRequest): Observable<UserState> {
        return this.authService.logIn(request).pipe(tap(this.state.set))
    }
}