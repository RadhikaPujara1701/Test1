import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl ='https://fakestoreapi.com/products/';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl).pipe(map((res:any)=>{
      return res;
    }));
  }
}
