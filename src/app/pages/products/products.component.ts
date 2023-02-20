import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { Item } from 'src/app/models/models';
import { Icoffee } from 'src/app/models/coffees';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Item[] = [];
  
  

  constructor(private ProductService: ProductService) {}
   public illustrations: Icoffee = {
   
    category: "illustrations",
    types: [
    {
   name: "Illustration Japanese",
   description: "Illustation from ",
   image: "./assets/japanese.webp",
   price: 39.99,
       },
     {
   name: "Bonsai Illustration",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   price: 39.99,
   image: "./assets/japanese1.jpeg",
      },
      {
   name: "Japanese Art",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   image:  "./assets/japanese2.jpeg",  
   price: 39.99,
        },
        {
   name: "Bonsai Japanese Style",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   image: "./assets/japanese3.jpeg",
   price: 39.99,
       },
       {
   name: "Botanic Illustration",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   image: "./assets/japanese4.jpeg",
   price: 39.99,  
       },
     {
   name: "Random Bonsai Art",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   image:"./assets/japanese5.jpeg",
   price: 39.99,
       },
       {
   name: "Japanese Tree",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   image: "./assets/japanese6.jpeg",
   price: 39.99,
   },
    {
   name: "Illustation Tree Bonsai",
   description: "Una de ticulares raíces aé",
   image:  "./assets/japanese7.jpeg",  
   price: 39.99,
     },
         
    ]
    }
    
    public arrayCoffees: Icoffee = {
      category: "coffees",
      types: [
        {
          name: "Latte",
          description: "Spanish style",
          image: "./assets/latte.jpeg",
          price: 6
        },
        {
          name: "Colombian Coffee",
          description: "Best ever coffee",
          image: "./assets/colombian.jpeg",
          price: 6
        },
        {
          name: "Soy Milk",
          description: "Go Vegan",
          image: "./assets/soy.jpeg",
          price: 6
        },
        {
          name: "Black Coffee",
          description: "Hard Style",
          image: "./assets/espresso.jpeg",
          price: 6
        }
      ]
    }
    public arrayTeas: Icoffee = {
      category: "teas",
      types: [
        {
          name: "Matcha",
          description: "Elegant, healthy",
          image: "./assets/matcha.jpeg",
          price: 6
        },
        {
          name: "Arab Tea",
          description: "Best ever coffee",
          image: "./assets/arab.jpeg",
          price: 8
        },
        {
          name: "Green Tea",
          description: "Delicious",
          image: "./assets/green.jpeg",
          price: 9
        },
        {
          name: "Breakfast",
          description: "Vintage Mood",
          image: "./assets/breakfasttea.jpeg",
          price: 6
        }
      ]
    }
  

  ngOnInit(){
    this.ProductService.getProducts().subscribe((data:Item[])=>{
      this.productList = [...data];
    })
  }

}
