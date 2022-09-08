import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  isLoading: boolean = false;
  productsList: Product[] = [];

  constructor(private _productService: ProductService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this._productService.getProducts().subscribe(data => {
      this.productsList = data;      
    });

    setTimeout(() => {
      this.isLoading = false;  
    }, 500);    
  }

  redirectToEdit(id :any ){
    this.router.navigate(['edit-product/' + id]);
  }

  deleteProduct(id:any){
    this.isLoading = true;
    this._productService.deleteProduct(id).subscribe(()=>{
      this.toastr.error('Product Deleted','Done!',{positionClass: 'toast-top-center', timeOut: 1500})
      this.getProducts();
    });    
    setTimeout(() => {
      this.isLoading = false;  
    }, 500);
  }

}
