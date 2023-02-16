import { NotfoundComponent } from './../notfound/notfound.component';
import { ProductComponent } from './../product/product.component';
import { ProductsComponent } from './../products/products.component';
import { HomeComponent } from './../home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    NotfoundComponent,
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
