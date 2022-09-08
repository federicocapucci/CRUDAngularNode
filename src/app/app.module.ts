import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductsListComponent, SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, CommonModule, BrowserAnimationsModule, ToastrModule.forRoot(), HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
