import { ProductsComponent } from './../products/products.component';

import { ProductComponent } from './../product/product.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { ManageComponent } from './../manage/manage.component';
import { HomeComponent } from './../home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { PipePipe } from 'src/app/pipe/pipe.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ManageComponent,
    NotfoundComponent,
    PipePipe,
    ProductComponent,
    ProductsComponent
   

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
