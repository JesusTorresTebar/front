import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-customer-invoice',
  templateUrl: './add-customer-invoice.component.html',
  styleUrls: ['./add-customer-invoice.component.css']
})
export class AddCustomerInvoiceComponent implements OnInit {
  selectCustomer: boolean=true;
  showCustomer:boolean=false;
  customer: Customer;
  customerList: Customer[]=[];
  productList: Product[]=[];

  /*Codigo dropList*/
  myControl = new FormControl();
  options: string[] = null;
  filteredOptions: Observable<string[]>;


  constructor(private serviceInvoice:InvoiceService, private route:ActivatedRoute, private router:Router, private serviceProduct:ProductService) { }

  ngOnInit(): void {

    this.serviceInvoice.findAllCustomer().subscribe(customerList =>{
      this.customerList=customerList;
      for(let i=0;i<customerList.length;i++){
        this.options.push(customerList[i].name);
      }
    });


    this.serviceProduct.findAllProduct().subscribe(productList =>{
      this.productList=productList;
    });


    /*Codigo dropList*/
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


/*Codigo dropList*/
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  public backToList():void{
    this.router.navigate(['/home']);
  }
  }








