import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  * as productList  from '../dummy/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }

  getAllProducts () {
    return productList;
  }

}
