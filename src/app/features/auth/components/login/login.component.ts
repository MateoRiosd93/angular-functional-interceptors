import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { LoginRequest } from '../../models/login-request.model';
import { UserStore } from '../../store/user.store';
import { Router } from '@angular/router';
import { setTokenLocalStorage } from '../../../../shared/utils/local-storage';

interface LoginForm {
    username: FormControl<string>
    password: FormControl<string>
}

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    private readonly router = inject(Router)
    private readonly formBuilder = inject(FormBuilder)
    readonly userStore = inject(UserStore)

    form = this.formBuilder.group<LoginForm>({
        username: this.formBuilder.control('', { nonNullable: true, validators: [Validators.required] }),
        password: this.formBuilder.control('', { nonNullable: true, validators: [Validators.required] })
    })

    login() {
        if (this.form.invalid) return

        const { username = '', password = '' } = this.form.value

        const request: LoginRequest = {
            username,
            password
        }

        this.userStore.logIn(request).subscribe({
            // Se realiza { void y la redireccion ya que navigateByUrl retorna una promesa }
            // y el next espera algo que no retorne nada, void
            next: ({ accessToken }) => {
                setTokenLocalStorage(accessToken)
                this.router.navigateByUrl('/products/list')
            },
            error: console.error
        })
    }
}
