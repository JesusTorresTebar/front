import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseEndpoint = 'http://localhost:9090/';
  constructor(private http: HttpClient ) { }


  
}
