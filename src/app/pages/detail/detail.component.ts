import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
 id!: number;
 product: any;
 constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramId => {
      this.id = Number(paramId.get("id"));

    })

        this.productService.getBonsai(this.id).subscribe((data:any)=>{
         this.product = data;
        })
      }
     deleteBonsai(){
      this.productService.deleteBonsai(this.id).subscribe((data:any)=>{
        this.router.navigate(["/"]);
      })
     }
  
  }

