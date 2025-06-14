import { HttpHandler, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { UserStore } from "../../features/auth/store/user.store";

const injectUserStore = () => inject(UserStore)

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
    const token = injectUserStore().userState().accessToken

    if (token) {
        const tokenHeaders = request.clone({
            setHeaders: {
                Autorizacion: `Bearer ${token}`
            }
        })

        return next(tokenHeaders)
    }

    return next(request)
}