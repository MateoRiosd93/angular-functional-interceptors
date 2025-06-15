import { Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from '../../store/products.store';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-list',
    imports: [RouterLink],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    readonly productsStore = inject(ProductsStore)

    ngOnInit() {
        // Para que se active el flujo o escuchar los cambios del store se debe usar 
        // el .subscribe() en caso contrario no se escucha nada
        this.productsStore.getProducts().subscribe()
    }

}

