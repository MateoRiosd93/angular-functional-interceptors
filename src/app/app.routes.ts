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
        path: 'products',
        loadChildren: () => import('./features/products/products.routes')
            .then(routerModule => routerModule.default)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
