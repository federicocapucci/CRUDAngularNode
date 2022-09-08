import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[] = [];

  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.productsList = data;      
    });
  }

  deleteProduct(id:any){
    this._productService.deleteProduct(id).subscribe(()=>{
      this.toastr.error('Product Deleted','Done!',{positionClass: 'toast-top-center', timeOut: 1500})
      this.getProducts();
    });    
  }

}
