import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { Iarray } from 'src/app/models/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    
  bonsaisList: any[] = [];
    
     constructor (private productService:ProductService) {}

     ngOnInit(): void {
      this.productService.getBonsais().subscribe((data:any) => {
        console.log(data);
        this.bonsaisList = [...data]
      })
     } 
    //¿hace falta aquí pasar la función para obtener las pelis? No, no?
     
//     public arrayPlants: Iarray = {
//       category: "plants",
//       info: [
//       {
//         id: 1,
//        name: "Ficus Ginseng Kokedama",
//        description: "Una de plantas más bonitas y elegantes. Su tronco y sus particulares raíces aéreas hacen que quede perfecto con la kokedama",
//        cares: "Estancia luminosa, sol indirecto, evitar fuentes de aire directas, requiere poca agua",
//        music: "Soul/Jazz",
//        price: 39.99,
//        image: {
//           src: "./assets/kokedama.jpeg",
//           alt: "kokedama"
//        }
//     },
//       {
//         id: 2,
//         name: "Juniperus",
//         description: "Esta especie de bonsái es muy adecuada para diseños de madera muerta y se ve muy bien con sus finas almohadillas de agujas",
//         cares: "Exterior, sitio muy luminoso, abono orgánico, pinzar brotes largos para desarrollar nubes de follaje",
//         music: "Dodecaphonic",
//         price: 49.99,
//         image: {
//           src: "./assets/junipero.webp",
//           alt: "juniperus"
//        }
//     },
//       {
//         id: 3,
//         name: "Carmona Microphylla",
//         description: "Bonsai Carmona, también conocido como 'Árbol escorpión' por la forma de crecimiento de sus ramas, parecida a la figura de un escorpión",
//         cares: "Interior, temperaturas bajas, iluminación natural, regar con abundancia",
//         music: "Classic",
//         price: 39.99,
//         image: {
//           src: "./assets/carmona.avif",
//           alt: "Carmona"
//        }
//       },
//       { 
//         id: 4,
//         name: "Kotate Mochi",
//         description:"Tamañano entre 15 y 30 cm. Sencillo de mantener. Estilo bosque frondoso.",
//         cares: "Espacios abiertos y luminosos, poca agua. Evitar temperaturas extremas.",
//         music: "Gregorian",
//         price: 29.99,
//         image: {
//           src: "./assets/kotate.jpeg",
//           alt: "Kotate Mochi"
//        }
//     },
//     {  
//       id: 5,
//       name: "Empire Ficus",
//       description:"Tamañano entre 15 y 30 cm. Sencillo de mantener. Estilo bosque frondoso",
//       cares: "Espacios abiertos y luminosos, poca agua. Evitar temperaturas extremas.",
//       music: "Gregorian",
//       price: 29.99,
//       image: {
//         src: "./assets/empire.jpeg",
//         alt: "Empire"
//      }
//   },
//   { 
//     id: 6,
//     name: "Maple",
//     description:"Tamañano entre 15 y 30 cm. Sencillo de mantener. Estilo bosque frondoso",
//     cares: "Espacios abiertos y luminosos, poca agua. Evitar temperaturas extremas.",
//     music: "Gregorian",
//     price: 29.99,
//     image: {
//       src: "./assets/maple.jpeg",
//       alt: "Maple"
//    }
// }
//     ]
//     }
 
}
