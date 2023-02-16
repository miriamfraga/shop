import { ProductComponent } from './../product/product.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
   
  
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    NotfoundComponent
  ]
})
export class SharedModule { }
