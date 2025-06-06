import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes')
            .then(routesModule => routesModule.default)
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes')
            .then(routesModule => routesModule.default)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
