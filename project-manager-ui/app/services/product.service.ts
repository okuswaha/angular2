import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
	constructor(private http: Http){
		console.log('ProductService initailized');
	}
	getPosts(){
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
				.map(res => res.json());
	}
	
	getOrderDetails(){
		return this.http.get('http://localhost:8090/om/order-details/list')
				.map(res => res.json());
	}
	
	getProducts() {
		return this.http.get('http://localhost:8090/om/product/products/list')
				.map(res => res.json());
	}
}