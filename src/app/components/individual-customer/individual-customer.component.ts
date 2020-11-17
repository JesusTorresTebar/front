import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-individual-customer',
  templateUrl: './individual-customer.component.html',
  styleUrls: ['./individual-customer.component.css']
})
export class IndividualCustomerComponent implements OnInit {
  customer:Customer;
  sub:any;
  id:string;
  constructor(private service:InvoiceService,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.findCustomerById(this.id).subscribe(customer =>{
        this.customer=customer;
      });
    });
    
  }

}
