import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any[]=[];
  constructor(private http:HttpClient) { }

  GetProducts(){
    return this.http.get("assets/data.json")
  }

}
