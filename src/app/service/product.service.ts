import { ProductRegistration } from './../models/productRegistration';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/models';


@Injectable()
export class ProductService {

  backUrl: string = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products";
  // backBonsais: string = "https://back-bonsai.vercel.app/bonsais"
 backBonsais: string = 'http://localhost:3000/bonsais';

  constructor(private http: HttpClient) { }

  public productData = {
    id: 0,
    name: "",
    price: 0,
    care: "",
    music: "",
    description: "",
    image: "",
  }

  getProduct(id: number){
    return this.http.get(`${this.backUrl}/${id}`)
  }
  getProducts(): Observable <Item[]>{
    return this.http.get<Item[]>(this.backUrl)
  }
  postBonsai(product:ProductRegistration){
    return this.http.post(this.backBonsais,product)
  }
  getBonsais() {
    return this.http.get(this.backBonsais)
  }
  getBonsai(id:number) {
    return this.http.get(`${this.backBonsais}/${id}`)
  }
  deleteBonsai(id:number){
    return this.http.delete(`${this.backBonsais}/${id}`)
  }
  
}
