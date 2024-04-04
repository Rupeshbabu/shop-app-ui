import { Injectable } from '@angular/core';
import  * as categoryList  from '../dummy/data.json';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return categoryList;
  }
}
