import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Iproduct[]=[];
  constructor(private http:HttpClient) { }

  GetProducts(){
    return this.http.get("assets/data.json")
  }

}
