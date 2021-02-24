import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('productList',{static:true}) productList: ProductListComponent;
 ngOnInit(): void {
  this.productList.products = [
  {
  name: 'apple',
  price: 111
  },
  {
  name: 'orange',
  price: 222
  },
  {
  name: 'banana',
  price: 333
  }
  ];
  }
 constructor() {}
 }
 