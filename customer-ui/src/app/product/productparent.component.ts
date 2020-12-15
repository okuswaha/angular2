import { Component } from '@angular/core';

@Component({
  selector: 'app-product-parent',
  template: `<p> product works! </p> 
              <app-product-child [greetMessage]="childMessage"></app-product-child>`
})
export class ProductParentComponent {

 childMessage : string = "This is nicer parent";

  constructor() { }

}

