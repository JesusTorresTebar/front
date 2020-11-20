import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInvoice } from 'src/app/models/customerInvoice';
import { ProviderInvoice } from 'src/app/models/providerInvoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  selectedCustomerInvoice: CustomerInvoice;
  selectedProviderInvoice: ProviderInvoice;


  titulo: string=" Invoice List";
  customerInvoiceList:CustomerInvoice[];
  providerInvoiceList:ProviderInvoice[];


  constructor(private service:InvoiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.findAllCustomerInvoice().subscribe(customerInvoices =>{
      this.customerInvoiceList=customerInvoices;
    });

    this.service.findAllProviderInvoice().subscribe(providerInvoices =>{
      this.providerInvoiceList=providerInvoices;
    });
  }


  onSelectProvider(providerInvoice):void{
    this.selectedProviderInvoice=providerInvoice;
  }



  onSelectCustomer(customerInvoice):void{
    this.selectedCustomerInvoice=customerInvoice;
  }

}
