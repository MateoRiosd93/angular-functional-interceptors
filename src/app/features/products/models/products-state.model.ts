import { ProductsResponse } from './products-response.model';

export interface ProductsState {
    products: ProductsResponse[]
    loading: boolean
    error: boolean
}

export const initialProductsState: ProductsState = {
    products: [],
    loading: false,
    error: false
}