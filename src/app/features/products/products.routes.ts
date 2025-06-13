import { Routes } from "@angular/router";

export default [
    {
        path: 'list',
        loadComponent: () => import('./components/product-list/product-list.component')
            .then(componentModule => componentModule.ProductListComponent)
    },
    {
        path: ':id',
        loadComponent: () => import('./components/product/product.component')
            .then(componentModule => componentModule.ProductComponent)
    }
] as Routes