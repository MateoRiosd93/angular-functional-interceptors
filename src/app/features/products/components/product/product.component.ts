import { Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from '../../store/products.store';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product',
    imports: [CurrencyPipe],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
    readonly productsStore = inject(ProductsStore)
    private readonly route = inject(ActivatedRoute)

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'))
        this.productsStore.getProductDetails(id).subscribe()
        setTimeout(() => {
            console.log(this.productsStore.product());
        }, 1000);
    }
}
