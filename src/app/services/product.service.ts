import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseEndpoint = 'https://product-service-100363755.herokuapp.com/product/';
  private headers : HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient ) { }

  
  /*GET*/
  public findAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseEndpoint + '/');
  }

  public finddProductById(id:string):Observable<Product>{
    return this.http.get<Product>(this.baseEndpoint + '/'+ id);
  }

  public findAllByZone(idZone:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseEndpoint + '/zone/'+ idZone);
  }

  public findAllProductUnderThreshold():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseEndpoint + '/find-all-products-under-threshold');
  }

  public findProductsByName(productName:string): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseEndpoint + '/name/'+productName);
  }
  /*POST*/

  public findAllProductInIds(idList:string[]): Observable<Product[]>{
    return this.http.post<Product[]>(this.baseEndpoint + '/find-all-products-with-ids',idList,{headers:this.headers });
  }
  
  public createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(this.baseEndpoint + '/' ,product,{headers:this.headers });
  }

  public updateProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(this.baseEndpoint +'/update' ,product,{headers:this.headers });
  }

  /*DELETE*/

  public deleteProduct(idProduct:string): Observable<void>{
    return this.http.delete<void>(this.baseEndpoint+'/'+idProduct );
  }

}
