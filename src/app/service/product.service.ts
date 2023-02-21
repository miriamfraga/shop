import { Iarray } from 'src/app/models/interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/models';

const backUrl = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public productData = {
    name: "",
    price: "",
    care: "",
    music: "",
    description: "",
    image: "",
    rating: ""
  }

  getProduct(id: number){
    return this.http.get(`${backUrl}/${id}`)
  }
  getProducts(): Observable <Item[]>{
    return this.http.get<Item[]>(backUrl)
  }
  postProducts(product: Iarray){
      return this.http.post(backUrl,product)
  }
  deleteProduct(id:number){
    return this.http.delete(`${backUrl}/${id}`)
  }
}
