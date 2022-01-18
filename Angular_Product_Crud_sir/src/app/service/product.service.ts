import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  //================ This is Database API =====================//
  url : string = "http://localhost:3000/products";


//====================== Add product ===================//
  addProduct(product : Product){ //post
    console.log(product);
    this.http.post(this.url, product).toPromise(); 
  }


  //====================== Edit product ===================//
  editProduct(product : Product){
    return this.http.get<Product>(this.url + "/" + product.id);
  }


  //====================== Update product ===================//
  updateProduct(product : Product){
    this.http.put(this.url + "/" + product.id, product).toPromise();
  }


  //====================== Delete product ===================//
  deleteProduct(product : Product){
    this.http.delete(this.url + "/" + product.id).toPromise();
  }


  //====================== Get All product ===================//
  getAll(){
    return this.http.get<Product>(this.url);
  }


}
