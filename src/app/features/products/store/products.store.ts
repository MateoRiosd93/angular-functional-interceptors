import { computed, inject, Injectable, signal } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { initialProductsState, ProductsState } from "../models/products-state.model";

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
    getProducts() {
        this.state.update(state => ({ ...state, loading: true }))

        this.productsService.getProducts().subscribe({
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
        })
    }

    getProductDetails(id: number) {
        this.state.update(state => ({ ...state, loading: true }))

        this.productsService.getProductDetail(id).subscribe({
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
        })
    }
}