import { Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from '../../store/products.store';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    imports: [],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    readonly productsStore = inject(ProductsStore)
    private readonly router = inject(Router)

    ngOnInit() {
        this.productsStore.getProducts()
    }

    showProductDetail(id: number){
        this.productsStore.getProductDetails(id)
        this.router.navigateByUrl(`/products/${id}`)
    }
}

