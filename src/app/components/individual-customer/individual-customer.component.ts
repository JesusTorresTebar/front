import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-individual-customer',
  templateUrl: './individual-customer.component.html',
  styleUrls: ['./individual-customer.component.css']
})
export class IndividualCustomerComponent implements OnInit {
  titulo: string = 'Customer Details';
  customer:Customer;
  newCustomer:Customer;
  sub:any;
  id:string;
  constructor(private service:InvoiceService,private route:ActivatedRoute, private router:Router) { }
 
  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.findCustomerById(this.id).subscribe(customer =>{
        this.customer=customer;
        this.newCustomer=customer;
      });
    });
    
  }


  public updateCustomer():void{
    this.service.createCustomer(this.newCustomer).subscribe(newCustomer =>{
    console.log(this.newCustomer);
    alert(`Customer Updated.DNI:${this.newCustomer.id}`);
    this.router.navigate(['/customers']);
    });
    
  }

  public deleteCustomer():void{
   this.service.deleteCustomer(this.customer.id).subscribe();
   alert(`Customer Deleted.DNI:${this.newCustomer.id}`);
   this.router.navigate(['/customers']);
  }

  public backToList():void{
    this.router.navigate(['/customers']);
  }

}
