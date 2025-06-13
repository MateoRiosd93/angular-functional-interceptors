export interface ProductResponse {
    id: number
    title: string
    description: string
    category: string
    price: number
    brand: string
    stock: number

    reviews: Review[]
    images: string[]

}

interface Review {
    rating: number
    comment: string
    date: Date
    reviewerName: string
    reviewerEmail: string
}
