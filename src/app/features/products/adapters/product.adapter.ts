import { ProductApiResponse } from "../models/product-api-response.model";
import { ProductResponse } from "../models/product-response.model";

export const adpatProductResponse = (product: ProductApiResponse): ProductResponse => ({
    id: product.id,
    title: product.title,
    description: product.description,
    brand: product.brand,
    category: product.category,
    price: product.price,
    stock: product.stock,
    reviews: product.reviews,
    images: product.images
})