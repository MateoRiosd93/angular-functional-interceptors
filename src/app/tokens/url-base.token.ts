import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";

export const URL_BASE = new InjectionToken<string>('URL_BASE', {
    providedIn: 'root',
    factory: () => environment.url_base
})