import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/models';

const backUrl = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable <Item[]>{
    return this.http.get<Item[]>(backUrl)
  }
}
