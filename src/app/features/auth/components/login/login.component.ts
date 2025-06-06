import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';

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
    private readonly formBuilder = inject(FormBuilder)
    private readonly authService = inject(AuthService)

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

        this.authService.logIn(request).subscribe({
            next: response => console.log(response)
        })
    }
}
