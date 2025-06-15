import { computed, inject, Injectable, signal } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { initialProductsState, ProductsState } from "../models/products-state.model";
import { Observable, tap } from "rxjs";
import { ProductsResponse } from "../models/products-response.model";
import { ProductResponse } from "../models/product-response.model";

@Injectable({ providedIn: 'root' })
export class ProductsStore {
    private readonly productsService = inject(ProductsService)
    private readonly state = signal<ProductsState>(initialProductsState)

    // Computed signals (Solo son de lectura)
    readonly products = computed(() => this.state().products)
    readonly product = computed(() => this.state().product)
    readonly loading = computed(() => this.state().loading)
    readonly error = computed(() => this.state().error)

    // Acciones para controlar el state
    getProducts(): Observable<ProductsResponse[]> {
        this.state.update(state => ({ ...state, loading: true }))

        return this.productsService.getProducts().pipe(tap({
            next: products => this.state.update(state => ({
                ...state,
                products,
                loading: false
            })),
            error: error => {
                this.state.update(state => ({
                    ...state,
                    loading: false,
                    error: true
                }))

                console.error(error)
            }
        }))
    }

    getProductDetails(id: number): Observable<ProductResponse> {
        this.state.update(state => ({ ...state, loading: true }))

        return this.productsService.getProductDetail(id).pipe(tap({
            next: product => this.state.update(state => ({
                ...state,
                product,
                loading: false
            })),
            error: error => {
                this.state.update(state => ({
                    ...state,
                    loading: false,
                    error: true
                }))

                console.error(error)
            }
        }))
    }
}