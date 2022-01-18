import { Product } from './../model/product.model';
import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../service/product.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ps: ProductService) { }

massage = "";

  ngOnInit() {
    this.getAll();
  }
  flag: boolean = true;
  id: number;
  product: any;
  products: Product;


  addProduct(product: Product) { //post
    this.ps.addProduct(product);
    this.massage = " Data Added Successfully";
    this.getAll();
    
  }
  editProduct(product: Product) {
    // this.ps.editProduct(product).subscribe(
    //   (response) => {
    //     return response;
    //   }
    // );
    this.product = product;
    this.id = product.id;
    this.flag = false;
  }
  updateProduct(product: Product) {
    this.ps.updateProduct(product, this.id).subscribe((res) => {this.product = res});
    this.massage = " Data Updated Successfully";
    this.getAll();
    this.flag = true;
  }
  deleteProduct(product: Product) {
    this.ps.deleteProduct(product);
    this.massage = " Data Deleted Successfully";
    this.getAll();
  }

  getProduct(id: number)  {
    this.id = id;
    this.flag = false;
    this.ps.getProduct(id).subscribe((response) => { 
      this.product = response;
    });
  }
  
  getAll() {
    this.ps.getAll().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

  @Output() emmitter: EventEmitter<any> = new EventEmitter();
  emitMessege(){
    this.emmitter.emit("hello from child");
  }

}
