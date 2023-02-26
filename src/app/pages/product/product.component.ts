import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    
  bonsaisList: any[] = [];
  filteredBonsai: any[] = [];
  isGrid: boolean = false;
    
  constructor(private productService: ProductService) { }

  filterBonsais(filter: any) {
    this.filteredBonsai = this.bonsaisList.filter((bonsai) => {
      bonsai.name.includes(filter);
    })
  }

  public selectGrid = () => {
    this.isGrid = true;
    console.log(this.isGrid)
  }

  public selectList = () => {
    this.isGrid = false;
    console.log(this.isGrid)
  }
  
  
     ngOnInit(): void {
      this.productService.getBonsais().subscribe((data:any) => {
        console.log(data);
        this.bonsaisList = [...data];
        this.filteredBonsai = [...data];
      })
     } 
}
