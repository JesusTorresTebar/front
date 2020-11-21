import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../models/building';
import { Zone } from '../models/zone';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  
  private baseEndpoint = 'https://storage-service-100363755.herokuapp.com/storage';
  private headers : HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient ) { }

  
  /*GET*/
  public findAllBuildings(): Observable<Building[]>{
    return this.http.get<Building[]>(this.baseEndpoint + '/');
  }

  public findZonesByBuildingId(id:string):Observable<Zone[]>{
    return this.http.get<Zone[]>(this.baseEndpoint + '/zone/'+ id);
  }

  
  public createProduct(building:Building): Observable<Building>{
    return this.http.post<Building>(this.baseEndpoint + '/' ,building,{headers:this.headers });
  }

  public updateProduct(zone:Zone): Observable<Zone>{
    return this.http.post<Zone>(this.baseEndpoint +'/update' ,zone,{headers:this.headers });
  }


}
