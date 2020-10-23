import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  private baseEndpoint = 'http://localhost:9090/';
  constructor(private http: HttpClient ) { }
}
