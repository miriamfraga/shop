import { ProductRegistration } from './../models/productRegistration';
import { Iarray } from 'src/app/models/interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/models';

const backUrl : string = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public productData = {
    id: "",
    name: "",
    price: "",
    care: "",
    music: "",
    description: "",
    image: "",
    rating: ""
  }


  getProducts(): Observable <Item[]>{
    return this.http.get<Item[]>(backUrl)
  }
  postProducts(product: ProductRegistration){
      return this.http.post(backUrl,product)
  }
}
