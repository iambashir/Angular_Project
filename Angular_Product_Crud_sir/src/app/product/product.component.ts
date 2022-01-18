import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ps : ProductService) { }

  //======== Everytime this method will reload first when we refresh our page ========// 
  ngOnInit() {
    this.getAll();
  }
 product  : Product;
 products : Product;

//====================== Add product ===================//
  addProduct(product : Product){ //post
    this.ps.addProduct(product);
    this.getAll();
  }

//======================== Edit product =================//
  editProduct(product : Product){
    this.ps.editProduct(product).subscribe(
      (response) => {
        return response;
      }
    );
  }

//======================== Update product =================//
  updateProduct(product : Product){
    this.ps.updateProduct(product);
  }

//======================== Add product ===================//
  deleteProduct(product : Product){
    this.ps.deleteProduct(product);
    this.getAll();
  }


// getProduct(id:number){
//   this.ps.getAll().subscribe(
//     (response) => {
//       this.products = response;
//     }
//   );

// }


//======================== Add product ===================//
  getAll(){
    this.ps.getAll().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

}
