import { Component } from '@angular/core';
import { ProductService} from '../services/product.service';

@Component({
	moduleId : module.id,
	selector: 'product',
	templateUrl: 'product.component.html',
	providers: [ProductService],
})
export class ProductComponent  {
	product :Product;
	products : Product;
	constructor(private productService : ProductService) {
	this.product = {};
		this.productService.getProducts().subscribe( products => {
			this.products = products;
		});
	}
}

interface Product {
	productId : string;
    sku : string;
    productName : string;
    productDesc : string;
    categoryId : string;
    unitPrice : string;
}
 
