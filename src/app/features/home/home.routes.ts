import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component')
            .then(componentModule => componentModule.HomeComponent)
    }
] as Routes