import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { Item } from 'src/app/models/models';
import { Iarray } from 'src/app/models/interface';
import { Icoffee } from 'src/app/models/coffees';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Item[] = [];
  filteredList: any;
  filter!: string;

  constructor(private ProductService: ProductService) {}
   public topProducts: Iarray = {
   
    category: "illustrations",
    info: [
    {
   name: "Illustration Japanese",
   description: "Illustation from ",
   cares: "Ejbndh",
   music: "Sjbndh",
   price: 39.99,
   image: {
        src: "./assets/japanese.webp",
        alt: "illustation"
     }},
     {
   name: "Ficus Ginseng Kokedama",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
         src: "./assets/japanese1.jpeg",
         alt: "kokedama"
      }},
      {
   name: "Ficus Ginseng Kokedama",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
           src: "./assets/japanese2.jpeg",
           alt: "kokedama"
        }},
        {
   name: "Ficus Ginseng Kokedama",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
          src: "./assets/japanese3.jpeg",
          alt: "kokedama"
       }},
       {
   name: "Ficus Ginseng Kokedama",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
          src: "./assets/japanese4.jpeg",
          alt: "kokedama"
       }},
     {
   name: "Ficus Ginseng Kokedama",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
          src: "./assets/japanese5.jpeg",
          alt: "kokedama"
       }},
       {
   name: "Ficus Ginseng Kokedama",
   description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aé",
   cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
     src: "./assets/japanese6.jpeg",
     alt: "kokedama"
    }},
    {
   name: "FicKokedama",
   description: "Una de ticulares raíces aé",
   cares: "Estancia lumiequiere poca agu",
   music: "Soul/Jazz",
   price: 39.99,
   image: {
     src: "./assets/japanese7.jpeg",
     alt: "kokedama"
   }},
         
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
