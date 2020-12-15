import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-child',
  template: `<h2> Hi {{greetMessage}} </h2>`
})
export class ProductChildComponent {

 @Input() greetMessage : string = "Hello";

  constructor() { }

}

