import { Component } from '@angular/core';
import { Iarray } from 'src/app/models/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    public arrayPlants: Iarray = {
      category: "plants",
      info: [
      {
       name: "Ficus Ginseng Kokedama",
       description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aéreas hacen que quede perfecto con la kokedama",
       price: 39,
       stars: 5,
       image: "./assets/kokedama.jpeg",     
    },
      {
        name: "Juniperus",
        description: "Esta especie de bonsái es muy adecuada para diseños de madera muerta y se ve muy bien con sus finas almohadillas de agujas",
        price: 49.99,
        stars: 5,
        image: "./assets/junipero.webp",  
    },
      {
        name: "Carmona Microphylla",
        description: "Bonsai Carmona, también conocido como 'Árbol escorpión' por la forma de crecimiento de sus ramas, parecida a la figura de un escorpión",
        price: 39.99,
        stars: 4,
        image: "./assets/carmona.avif",
      },
    ]

    }
  
}
