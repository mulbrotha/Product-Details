import {Component, Input, Output, OnInit} from '@angular/core'
import {Product} from "./product";
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from './product.service'
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId : module.id,
  selector : 'my-product-detail',
  templateUrl : 'product-detail.component.html',
  styleUrls : ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  constructor(private productService : ProductService, private route : ActivatedRoute, private location : Location){}
  @Input()
  product : Product;

  ngOnInit() : void{
    this.route.params
      .switchMap((params : Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }
}
