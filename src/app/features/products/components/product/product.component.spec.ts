import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ProductsStore } from '../../store/products.store';
import { signal } from '@angular/core';
import { of } from 'rxjs';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                HttpClient,
                HttpHandler,
                provideRouter([]),
                {
                    provide: ProductsStore,
                    useValue: {
                        product: signal({
                            id: 1,
                            title: 'Mock Product',
                            brand: 'MockBrand',
                            price: 999.99,
                            description: 'A description of the mock product.',
                            category: 'Mock Category',
                            images: ['https://example.com/mock.jpg'],
                            reviews: [
                                {
                                    reviewerName: 'John Doe',
                                    date: new Date(),
                                    rating: 4,
                                    comment: 'Very nice product.'
                                }
                            ]
                        }),
                        getProductDetails: () => of({})
                    },
                }
            ],
            imports: [ProductComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
