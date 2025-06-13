import { ProductResponse } from './product-response.model';
import { ProductsResponse } from './products-response.model';

export interface ProductsState {
    products: ProductsResponse[]
    product: ProductResponse
    loading: boolean
    error: boolean
}

export const initialProductsState: ProductsState = {
    products: [],
    product: {} as ProductResponse,
    loading: false,
    error: false
}