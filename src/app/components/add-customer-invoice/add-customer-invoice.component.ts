import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { map, startWith } from 'rxjs/operators';
import { InvoiceDetail } from 'src/app/models/invoiceDetail';
import { CustomerInvoice } from 'src/app/models/customerInvoice';




@Component({
  selector: 'app-add-customer-invoice',
  templateUrl: './add-customer-invoice.component.html',
  styleUrls: ['./add-customer-invoice.component.css']
})
export class AddCustomerInvoiceComponent implements OnInit {
  selectCustomer: boolean = true;
  showCustomer: boolean = false;

  customer: Customer;
  customerList: Customer[] = [];

  invoiceCreated: boolean = false;
  customerInvoice: CustomerInvoice = new CustomerInvoice();
  newCustomerInvoice: CustomerInvoice = new CustomerInvoice();

  emptyDetail: InvoiceDetail = new InvoiceDetail();

  productList: Product[] = [];

  detailList: InvoiceDetail[] = [];
  productDetailList: Product[] = [];
  /*
  productQuantityList:number[]=[];
  productTotalList:number[]=[];*/

  selectedCustomerName: string;
  /*Codigo dropList*/
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;


  constructor(private serviceInvoice: InvoiceService, private route: ActivatedRoute, private router: Router, private serviceProduct: ProductService) { }

  ngOnInit(): void {

    this.serviceInvoice.findAllCustomer().subscribe(customerList => {
      this.customerList = customerList;
      console.log("tamaño del array" + customerList.length);
      for (let i = 0; i < customerList.length; i++) {
        this.options.push(customerList[i].name);
      }


    });


    this.serviceProduct.findAllProduct().subscribe(productList => {
      this.productList = productList;
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


  public backToList(): void {
    this.router.navigate(['/home']);
  }


  onSelectCustomer(option: string): void {
    this.selectedCustomerName = option;
    console.log("OPTION: " + option);
    for (let i = 0; i < this.customerList.length; i++) {
      console.log("OPTION: " + option + " LIST: " + this.customerList[i]);
      if (this.customerList[i].name.toLowerCase() == option.toLowerCase()) {

        this.customer = this.customerList[i];
      }
    }
    this.showCustomer = true;
    this.selectCustomer = false;

    /*Creación de la factura.*/
    this.customerInvoice.customerId = this.customer.id;

    /*Obtención fecha*/
    let date = new Date();
    this.customerInvoice.invoiceDate = date;

    this.customerInvoice = this.updateInvoicePrice(10, this.customerInvoice);

    /*detalle vacio*/

    this.emptyDetail.productId = "0005";
    this.emptyDetail.quantity = 1;
    this.emptyDetail.total = 10
    this.emptyDetail.unitPrice = 10;
    this.customerInvoice.invoiceDetail = [this.emptyDetail];


    /*Creamos la factura y recibimos la nueva*/
    this.serviceInvoice.createCustomerInvoice(this.customerInvoice).subscribe(customerInvoice => {
      this.newCustomerInvoice = customerInvoice;
      this.invoiceCreated = true;
      console.log("la factura es:" + this.newCustomerInvoice.id);

    });
  }




  updateInvoicePrice(subtotal: number, customerInvoice: CustomerInvoice): CustomerInvoice {
    customerInvoice.subtotal = subtotal;
    customerInvoice.vatPercentage = 0.21;
    customerInvoice.vat = customerInvoice.vatPercentage * customerInvoice.subtotal;
    customerInvoice.total = customerInvoice.subtotal + customerInvoice.vat;


    return customerInvoice;

  }








}








