import {Injectable} from '@angular/core';
import {Product} from './product';
import {Http , Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService{

  private productsUrl = 'api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http : Http){}

  getProducts():Promise<Product[]>{
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  update(product : Product) : Promise<Product>{
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put(url, JSON.stringify(product), {headers : this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);

  }

  create(name: string): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
