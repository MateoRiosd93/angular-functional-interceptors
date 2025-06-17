import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [publicGuard],
        loadChildren: () => import('./features/home/home.routes')
            .then(routesModule => routesModule.default)
    },
    {
        path: 'auth',
        canActivate: [publicGuard],
        loadChildren: () => import('./features/auth/auth.routes')
            .then(routesModule => routesModule.default)
    },
    {
        path: 'products',
        canActivate: [privateGuard],
        loadChildren: () => import('./features/products/products.routes')
            .then(routerModule => routerModule.default)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
