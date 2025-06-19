import { Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from '../../store/products.store';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BackComponent } from '../../../../shared/components/icons/back/back.component';

@Component({
    selector: 'app-product',
    imports: [CurrencyPipe, DatePipe, RouterLink, BackComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
    readonly productsStore = inject(ProductsStore)
    private readonly route = inject(ActivatedRoute)

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'))
        this.productsStore.getProductDetails(id).subscribe()
    }
}
