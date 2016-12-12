import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import { ProductDetailComponent } from './product-detail.component';
import {ProductService} from './product.service'
import {Router} from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'my-product',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})

export class ProductComponent implements OnInit{

  constructor(private productService : ProductService, private route : Router){}
  title = 'Tour Of Products';
  products : Product[];
  selectedProduct : Product;

  onSelect(product : Product): void{
    this.selectedProduct = product;
  }

  getProducts() : void {
    this.productService.getProducts().then(product => this.products = product);
  }

  ngOnInit(): void{
    this.getProducts();
  }

  gotoDetail(): void {
    this.route.navigate(['/detail', this.selectedProduct.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }

  delete(product: Product): void {
    this.productService
      .delete(product.id)
      .then(() => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
  }
}
