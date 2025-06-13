import { ProductsApiResponse } from "../models/products-api-response.model";
import { ProductsResponse } from "../models/products-response.model";

export const adaptProductsResponse = (response: ProductsApiResponse): ProductsResponse[] => {
    return response.products.map(product => ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        images: product.images
    }))
}