import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerInvoice } from 'src/app/models/customerInvoice';
import { InvoiceDetail } from 'src/app/models/invoiceDetail';
import { Product } from 'src/app/models/product';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-individual-customer-invoice',
  templateUrl: './individual-customer-invoice.component.html',
  styleUrls: ['./individual-customer-invoice.component.css']
})
export class IndividualCustomerInvoiceComponent implements OnInit {
  titulo: string = 'Customer Invoice Details';
  customerInvoice: CustomerInvoice;
  newCustomerInvoice: CustomerInvoice;
  sub: any;
  id: string;


  total: number = 0;

  idProductList: string[] = [];

  detailList: InvoiceDetail[] = [];
  productDetailList: Product[] = [];


  customer: Customer;

  product: Product;
  productList: Product[] = [];

  constructor(private serviceInvoice: InvoiceService, private route: ActivatedRoute, private router: Router, private serviceProduct: ProductService) { }


  ngOnInit(): void {
    console.log("TRAMO 1");
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("TRAMO 2 ID DE LA FACTURA:" + this.id);

      this.serviceInvoice.findCustomerInvoiceById(+this.id).subscribe(customerInvoice => {
        this.customerInvoice = customerInvoice;
        this.newCustomerInvoice = customerInvoice;
        console.log("TRAMO 3");
        console.log("Customer" + this.newCustomerInvoice.customerId);
        console.log("If" + this.newCustomerInvoice.id);
        console.log("Fecha" + this.newCustomerInvoice.invoiceDate);




        console.log("TRAMO 3,5");
        console.log("Detalle" + 0 + "Id del producto" + this.newCustomerInvoice.details[0].productId);
        for (let i = 0; i < this.newCustomerInvoice.details.length; i++) {
          this.idProductList.push(this.newCustomerInvoice.details[i].productId);
          console.log("Detalle" + i + "Id del producto" + this.idProductList[i]);
        }


        console.log("TRAMO 4");
        this.serviceProduct.findAllProductInIds(this.idProductList).subscribe(productDetailList => {
          this.productDetailList = productDetailList;


        });

        this.detailList = this.newCustomerInvoice.details;
        console.log("TRAMO 5");
      });
    });





  }


  updateTotalPrice(): void {
    this.total = 0;
    for (let i = 0; i < this.productDetailList.length; i++) {

      this.total = this.total + this.productDetailList[i].price;
    }
  }
  public backToList(): void {
    this.router.navigate(['/home']);
  }
}
