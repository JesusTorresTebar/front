import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  selectedCustomer: Customer;
  titulo: string ="Customer List";
  customers: Customer[];

  constructor(private service:InvoiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.findAllCustomer().subscribe(customers=>{
      this.customers=customers;
    });
  }

  onSelect(customer:Customer): void {
    this.selectedCustomer=customer;
    console.log(this.selectedCustomer.id);
    this.router.navigate(['/individual-customer',this.selectedCustomer.id]);
    
  }


}
