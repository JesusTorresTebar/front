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


  titulo: string = " Invoice List";
  customerInvoiceList: CustomerInvoice[];
  providerInvoiceList: ProviderInvoice[];


  constructor(private service: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.findAllCustomerInvoice().subscribe(customerInvoices => {
      this.customerInvoiceList = customerInvoices;
    });

    this.service.findAllProviderInvoice().subscribe(providerInvoices => {
      this.providerInvoiceList = providerInvoices;
    });
  }


  onSelectProvider(providerInvoice: ProviderInvoice): void {
    this.selectedProviderInvoice = providerInvoice;
    console.log("HOLA ESTA ES LA ID:" + this.selectedProviderInvoice.id);
    this.router.navigate(['/individual-provider-invoice', this.selectedProviderInvoice.id]);
  }



  onSelectCustomer(customerInvoice: CustomerInvoice): void {
    this.selectedCustomerInvoice = customerInvoice;
    console.log("HOLA ESTA ES LA ID:" +this.selectedCustomerInvoice.id);
    this.router.navigate(['/individual-customer-invoice', this.selectedCustomerInvoice.id]);
  }

}
