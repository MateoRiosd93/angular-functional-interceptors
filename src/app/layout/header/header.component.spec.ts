import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [HttpClient, HttpHandler],
            imports: [HeaderComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
