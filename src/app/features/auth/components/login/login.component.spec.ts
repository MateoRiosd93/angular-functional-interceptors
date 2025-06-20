import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { UserStore } from '../../store/user.store';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let userStoreSpy: jasmine.SpyObj<UserStore>
    let routerSpy: jasmine.SpyObj<Router>

    beforeEach(async () => {
        userStoreSpy = jasmine.createSpyObj('UserStore', ['logIn'])
        routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])

        await TestBed.configureTestingModule({
            providers: [
                HttpClient,
                HttpHandler,
                { provide: UserStore, useValue: userStoreSpy },
                { provide: Router, useValue: routerSpy }
            ],
            imports: [LoginComponent, ReactiveFormsModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Formulario is invalid', () => {
        component.form.setValue({ username: '', password: '' });
        component.login();
        expect(userStoreSpy.logIn).not.toHaveBeenCalled();
    });

    it('Formulario is valid', () => {
        component.form.setValue({ username: 'admin', password: '1234' });

        userStoreSpy.logIn.and.returnValue(of({
            accessToken: 'token123',
            username: '',
            email: '',
            gender: '',
            image: '',
        }));

        component.login();

        expect(userStoreSpy.logIn).toHaveBeenCalledWith({
            username: 'admin',
            password: '1234'
        });
    });

    it('guarda el token y redirige si login es exitoso', () => {
        component.form.setValue({ username: 'admin', password: '1234' });

        userStoreSpy.logIn.and.returnValue(of({
            accessToken: 'token123',
            username: '',
            email: '',
            gender: '',
            image: '',
        }));
        component.login();

        expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/products/list');
    });

    it('llama a console.error si hay un error en login', () => {
        const error = new Error('Error de login');
        spyOn(console, 'error');
        component.form.setValue({ username: 'admin', password: 'wrong' });

        userStoreSpy.logIn.and.returnValue(throwError(() => error));

        component.login();

        expect(console.error).toHaveBeenCalledWith(error);
        expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
    });
});
