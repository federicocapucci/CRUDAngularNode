import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  isLoading: boolean = false;
  productForm: FormGroup;
  title: string = 'Create Product'
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private arouter: ActivatedRoute) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required]
    })
    this.id = arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {       
      this.isItEdit();    
  }

  addProduct() {
    this.isLoading = true;
    let product: Product;
    product = this.productForm.value

    if (this.id) {
      this._productService.editProduct(this.id, product)
        .subscribe(() => {
          this.toastr.info('', 'Product "' + product.name + '" successfully Updated', {
            positionClass: 'toast-top-center', timeOut: 1500
          })
          this.isLoading = false;

          this.router.navigate(['/'])
        });
    } else {
      this._productService.saveProduct(product).subscribe(() => {
      })
      this.toastr.success('', 'Product "' + product.name + '" successfully created', { positionClass: 'toast-top-center', timeOut: 1500 });

      this.isLoading = false;

      this.router.navigate(['/'])
    }
  }

  isItEdit() {
    if (this.id) {
      this.title = 'Edit Product'
      this._productService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          name: data.name,
          category: data.category,
          location: data.location,
          price: data.price
        })
      })
    }
  }





}
