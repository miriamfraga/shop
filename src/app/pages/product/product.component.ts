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
       cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agua",
       music: "Soul/Jazz",
       price: 39,
       image: {
          src: "../assets/kokedama.jpeg",
          alt: "kokedama"
       }
    },
      {
        name: "Juniperus",
        description: "Esta especie de bonsái es muy adecuada para diseños de madera muerta y se ve muy bien con sus finas almohadillas de agujas",
        cares: "Exterior, sitio muy luminoso, abono orgánico, pinzar brotes largos para desarrollar nubes de follaje",
        music: "Dodecaphonic",
        price: 49.99,
        image: {
          src: "./assets/junipero.webp",
          alt: "juniperus"
       }
    },
      {
        name: "Carmona Microphylla",
        description: "Bonsai Carmona, también conocido como 'Árbol escorpión' por la forma de crecimiento de sus ramas, parecida a la figura de un escorpión",
        cares: "Interior, temperaturas bajas, iluminación natural, regar con abundancia",
        music: "Classic",
        price: 39.99,
        image: {
          src: "./assets/carmona.avif",
          alt: "carmona"
       }
      },
    ]
    }
}
