import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  titulo: string = 'Add Product';
  customer: Customer=new Customer();
  constructor(private service: InvoiceService, private router:Router) { }

  ngOnInit(): void {
  }

  public saveCustomer():void{
    this.service.createCustomer(this.customer).subscribe(customer =>{
    console.log(this.customer);
    alert(`Customer Created.DNI:${this.customer.id}`);
    this.router.navigate(['/customers']);
    });
    
  }

  public backToList():void{
    this.router.navigate(['/home']);
  }

}
