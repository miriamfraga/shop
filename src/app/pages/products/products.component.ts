import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { Item } from 'src/app/models/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Item[] = [];
  constructor(private ProductService: ProductService) {}
  ngOnInit(){
    this.ProductService.getProducts().subscribe((data:Item[])=>{
      this.productList = [...data];
    })
  }
}
