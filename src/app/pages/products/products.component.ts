import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  productList: Item[] = [];
  filteredList: any;
  filter!: string;

  constructor(private ProductService: ProductService) {
    this.filteredList= this.productList;
    
  }
  ngOnInit(){
    this.ProductService.getProducts().subscribe((data:Item[])=>{
      this.productList = [...data];
    })
  }
  // onFilterProduct(filter: string){
    // const newList: any = this.productList.filter(pr => pr.name.includes(filter.toLowerCase()));
    // this.filteredList = newList;
  // }
}
