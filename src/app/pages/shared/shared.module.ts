import { FormsModule } from '@angular/forms';
import { PipesModule } from './../../pipes/pipes.module';
import { FilterPipe } from './../../pipes/filter.pipe';

import { ChildProductsComponent } from './../products/child-products/child-products.component';
import { ProductsComponent } from './../products/products.component';
import { ProductComponent } from './../product/product.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';





@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    ChildProductsComponent,
    ProductComponent,
    ProductsComponent
   


  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PipesModule,
    FormsModule
   
  
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    NotfoundComponent,
    ChildProductsComponent
   
  ]
})
export class SharedModule { }
