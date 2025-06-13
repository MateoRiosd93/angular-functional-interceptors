import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { URL_BASE } from "../../../tokens/url-base.token";
import { map, Observable } from "rxjs";
import { adaptProductsResponse } from "../adapters/product.adapeter";
import { ProductsResponse } from "../models/products-response.model";
import { ProductsApiResponse } from "../models/products-api-response.model";

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private readonly httpClient = inject(HttpClient)
    private readonly URL_BASE = inject(URL_BASE)

    getProducts(): Observable<ProductsResponse[]> {
        return this.httpClient.get<ProductsApiResponse>(`${this.URL_BASE}/products`)
            .pipe(map(adaptProductsResponse))
    }

    // TODO: Realizar obtener detalle del producto
    
}