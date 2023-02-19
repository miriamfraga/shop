import { HomeModule } from './../home/home.module';
import { ProductComponent } from './../product/product.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { ManageComponent } from './../manage/manage.component';
import { HomeComponent } from './../home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { PipePipe } from 'src/app/pipe/pipe.pipe';
import { ChildProductsComponent } from '../products/child-products/child-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    ManageComponent,
    NotfoundComponent,
    PipePipe,
    ChildProductsComponent

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    
   
  
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    NotfoundComponent,
    PipePipe
   
  ]
})
export class SharedModule { }
