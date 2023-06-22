import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

url ='https://dummyjson.com/quotes'
producturl='https://dummyjson.com/products'

  constructor(private http:HttpClient) { }

  data(){
    return this.http.get(this.url);
  }

  product(){
    return this.http.get(this.producturl);
  }
}
