import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { getTokenLocalStorage } from "../../shared/utils/local-storage";

const injectRouter = () => inject(Router)

export const privateGuard: CanActivateFn = () => {
    const token = getTokenLocalStorage()
    const router = injectRouter()

    console.log(token);

    if (!token) {
        router.navigateByUrl('/auth/log-in')
    }

    return !!token
}

export const publicGuard: CanActivateFn = () => {
    const token = getTokenLocalStorage()
    const router = injectRouter()

    console.log(token);

    if (token) {
        router.navigateByUrl('/products/list')
    }

    return !token
}