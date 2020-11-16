import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  titulo: string ="Customer List";
  customers: Customer[];

  constructor(private service:InvoiceService) { }

  ngOnInit(): void {
    this.service.findAllCustomer().subscribe(customers=>{
      this.customers=customers;
    })
  }

}
