import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInvoice } from '../models/customerInvoice';
import { ProviderInvoice } from '../models/providerInvoice';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseEndpoint = 'https://invoice-service-100363755.herokuapp.com/invoice';
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }


  /*GET*/
  public findAllCustomerInvoice(): Observable<CustomerInvoice[]> {
    return this.http.get<CustomerInvoice[]>(this.baseEndpoint + '/customer-invoice');
  }
  public findAllProviderInvoice(): Observable<ProviderInvoice[]> {
    return this.http.get<ProviderInvoice[]>(this.baseEndpoint + '/provider-invoice');

  }

  public findAllCustomerInvoiceBetween(start: Date, end: Date): Observable<CustomerInvoice[]> {
    return this.http.get<CustomerInvoice[]>(this.baseEndpoint + '/customer-invoice/' + start + '/' + end);
  }
  public findAllProviderInvoiceBetween(start: Date, end: Date): Observable<ProviderInvoice[]> {
    return this.http.get<ProviderInvoice[]>(this.baseEndpoint + '/provider-invoice/' + start + '/' + end);
  }

  public findAllCustomerInvoiceWithCustomerId(id: string): Observable<CustomerInvoice[]> {
    return this.http.get<CustomerInvoice[]>(this.baseEndpoint + '/customer-invoice/' + id);
  }

  public findAllProviderInvoiceWithProviderId(id: string): Observable<ProviderInvoice[]> {
    return this.http.get<ProviderInvoice[]>(this.baseEndpoint + '/provider-invoice/' + id);
  }

  public findAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseEndpoint + '/customer');
  }
  public findAllProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseEndpoint + '/provider');
  }

  public findCustomerById(id:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseEndpoint + '/customer/'+ id);
  }
  public findProviderById(id:string):Observable<Provider>{
    return this.http.get<Provider>(this.baseEndpoint + '/provider/'+ id);
  }

  public findCustomerInvoiceById(id:number):Observable<CustomerInvoice>{
    return this.http.get<CustomerInvoice>(this.baseEndpoint + '/single-customer-invoice/'+ id);
  }
  public findProviderInvoiceById(id:number):Observable<ProviderInvoice>{
    return this.http.get<ProviderInvoice>(this.baseEndpoint + '/single-provider-invoice/'+ id);
  }



  public findTenBestBuyerCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseEndpoint + '/top-buyer');
  }


  public totalSales(): Observable<number> {
    return this.http.get<number>(this.baseEndpoint + '/total-sales');
  }
  public totalPurchases(): Observable<number> {
    return this.http.get<number>(this.baseEndpoint + '/total-purchases');
  }

  public findBestSellingProduct(): Observable<Product> {
    return this.http.get<Product>(this.baseEndpoint + '/best-seller');
  }

/*POST*/
  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseEndpoint + '/customer', customer, { headers: this.headers });

  }
  public createProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.baseEndpoint + '/provider', provider, { headers: this.headers });

  }
  
  public createCustomerInvoice(customerInvoice:CustomerInvoice):Observable<CustomerInvoice>{
    return this.http.post<CustomerInvoice>(this.baseEndpoint + '/customer-invoice', customerInvoice, { headers: this.headers });
  }

  public createProviderInvoice(providerInvoice:ProviderInvoice):Observable<ProviderInvoice>{
    return this.http.post<ProviderInvoice>(this.baseEndpoint + '/provider-invoice', providerInvoice, { headers: this.headers });
  }


    /*DELETE*/

    public deleteCustomer(idCustomer:string): Observable<void>{
      return this.http.delete<void>(this.baseEndpoint+'/customer/'+idCustomer );
    }
     

    public deleteProvider(idProvider:string): Observable<void>{
      return this.http.delete<void>(this.baseEndpoint+'/provider/'+idProvider );
    }
}
