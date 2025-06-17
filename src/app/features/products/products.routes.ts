import { Routes } from "@angular/router";
import { privateGuard } from "../../core/guards/auth.guard";

export default [
    {
        path: 'list',
        canActivate: [privateGuard],
        loadComponent: () => import('./components/product-list/product-list.component')
            .then(componentModule => componentModule.ProductListComponent)
    },
    {
        path: ':id',
        canActivate: [privateGuard],
        loadComponent: () => import('./components/product/product.component')
            .then(componentModule => componentModule.ProductComponent)
    }
] as Routes