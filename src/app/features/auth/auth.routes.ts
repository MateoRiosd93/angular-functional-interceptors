import { Routes } from "@angular/router";
import { publicGuard } from "../../core/guards/auth.guard";

export default [
    {
        path: 'log-in',
        canActivate: [publicGuard],
        loadComponent: () => import('./components/login/login.component')
            .then(componentModule => componentModule.LoginComponent)
    },
    {
        path: '**',
        redirectTo: 'log-in'
    }
] as Routes