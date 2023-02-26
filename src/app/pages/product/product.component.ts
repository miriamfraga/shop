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
  filterSearch: string = "";
  
    
  constructor(private productService: ProductService) { }

  public selectGrid = () => {
    this.isGrid = true;
  }
  public selectList = () => {
    this.isGrid = false;
  }
  
     ngOnInit(): void {
      this.productService.getBonsais().subscribe((data:any) => {
        console.log(data);
        this.bonsaisList = [...data];
        this.filteredBonsai = [...data];
      })
     } 
}
