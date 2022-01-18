import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  url : string = "http://localhost:4000/products";

  addProduct(product : Product){
    this.http.post(this.url, product).toPromise();
    this.http.get<Product>(this.url).toPromise();
    //alert("Saved successfully");
    
  }

  updateProduct(product : Product, id: number){
   return  this.http.put(this.url + "/" + id, product);
  // this.http.get<Product>(this.url).toPromise();
  
  }
  deleteProduct(product : Product){
    this.http.delete(this.url + "/" + product.id).toPromise();
    this.http.get<Product>(this.url).toPromise();
  }
  getProduct(id: number){
    this.http.get(this.url + "/" + id);
    return this.http.get<Product>(this.url);
  }

  getAll(){
    return this.http.get<Product>(this.url);
  }

}
