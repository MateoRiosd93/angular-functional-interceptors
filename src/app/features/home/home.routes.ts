import { Routes } from "@angular/router";
import { publicGuard } from "../../core/guards/auth.guard";

export default [
    {
        path: '',
        canActivate: [publicGuard],
        loadComponent: () => import('./components/home/home.component')
            .then(componentModule => componentModule.HomeComponent)
    }
] as Routes