import { ProductService } from './../../../service/product.service';
import { Item } from './../../../models/models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-products',
  templateUrl: './child-products.component.html',
  styleUrls: ['./child-products.component.scss']
})
export class ChildProductsComponent {

 @Input () productList: Item[] =[];
 constructor (private productService:ProductService) {}
}
