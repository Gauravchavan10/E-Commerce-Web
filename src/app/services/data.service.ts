import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Icategory } from '../Models/category.model';
import { Iproduct } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private BASE_URL='https://fakestoreapi.com'
  constructor(private http:HttpClient) { }

  getcategory():Observable<Icategory[]>
  {
    return this.http.get<Icategory[]>(`${this.BASE_URL}/products`)
  }
  getproduct():Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(`${this.BASE_URL}/products`)
  }
  getproductbyid(id:number):Observable<Iproduct>
  {
    return this.http.get<Iproduct>(`${this.BASE_URL}/products/${id}`)
  }
}
