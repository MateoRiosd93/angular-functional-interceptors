import { Routes } from "@angular/router";

export default [
    {
        path: 'log-in',
        loadComponent: () => import('./components/login/login.component')
            .then(componentModule => componentModule.LoginComponent)
    },
    {
        path: '**',
        redirectTo: 'log-in'
    }
] as Routes