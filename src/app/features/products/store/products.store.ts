import { inject, Injectable, signal } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { initialProductsState, ProductsState } from "../models/products-state.model";

@Injectable({ providedIn: 'root' })
export class ProductsStore {
    private readonly productsService = inject(ProductsService)
    private readonly state = signal<ProductsState>(initialProductsState)

}