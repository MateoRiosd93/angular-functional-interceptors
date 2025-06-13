import { Routes } from "@angular/router";

export default [
    {
        path: 'products-list',
        loadComponent: () => import('./components/product-list/product-list.component')
            .then(componentModule => componentModule.ProductListComponent)
        
    }
    // TODO: Realizar ruta para el detalle del producto
] as Routes