import { ManageComponent } from './manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ManageRoutingModule,
    
  ], 
  exports: [
    //  ManageComponent
  ]
})
export class ManageModule { }
