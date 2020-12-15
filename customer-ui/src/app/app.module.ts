import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductParentComponent } from './product/productparent.component';
import { ProductChildComponent } from './product/productchild.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductParentComponent,
    ProductChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
