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
  showProductOption: boolean = false;

  customer: Customer;
  customerList: Customer[] = [];

  invoiceCreated: boolean = false;
  customerInvoice: CustomerInvoice = new CustomerInvoice();
  newCustomerInvoice: CustomerInvoice = new CustomerInvoice();

  emptyDetail: InvoiceDetail = new InvoiceDetail();
  auxDetail:InvoiceDetail = new InvoiceDetail();

  product:Product;
  productList: Product[] = [];

  detailList: InvoiceDetail[] = [];
  productDetailList: Product[] = [];
  /*
  productQuantityList:number[]=[];
  productTotalList:number[]=[];*/
  selectedProductName: string;
  selectedCustomerName: string;
  /*Codigo dropList*/
  myControl = new FormControl();
  options: string[] = [];

  total:number=0;

  filteredOptions: Observable<string[]>;


  constructor(private serviceInvoice: InvoiceService, private route: ActivatedRoute, private router: Router, private serviceProduct: ProductService) { }

  ngOnInit(): void {

    this.serviceInvoice.findAllCustomer().subscribe(customerList => {
      this.customerList = customerList;
      console.log("tamaño del array" + customerList.length);
      for (let i = 0; i < customerList.length; i++) {
        this.options.push(customerList[i].name);
      }
      
      this.emptyDetail.productId = "DELETE";
      this.emptyDetail.quantity = 1;
      this.emptyDetail.total = 10
      this.emptyDetail.unitPrice = 10;

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




    /*cambiamos la lista desplegable a los productos*/

    this.options = [];
    for (let i = 0; i < this.productList.length; i++) {
      this.options.push(this.productList[i].productName);
    }
    this.showProductOption = true;




    /*FACCTURA*/
    /*Creación de la factura.*/
    this.customerInvoice.customerId = this.customer.id;

    /*Obtención fecha*/
    let date = new Date();
    this.customerInvoice.invoiceDate = date;

    this.customerInvoice = this.updateInvoicePrice(10, this.customerInvoice);

    /*detalle vacio*/


    this.customerInvoice.details = [];
    this.customerInvoice.details.push(this.emptyDetail);
    console.log("POLLO:"+this.customerInvoice.details[0].productId);


    /*Creamos la factura y recibimos la nueva*/
    this.serviceInvoice.createCustomerInvoice(this.customerInvoice).subscribe(customerInvoice => {
      this.newCustomerInvoice = customerInvoice;
      this.invoiceCreated = true;
      console.log("la factura es:" + this.newCustomerInvoice.id);

      this.newCustomerInvoice.details=[];
      this.newCustomerInvoice.id=this.newCustomerInvoice.id+1;
      

    });

    

  
  }

  onSelectProduct(option: string): void {
    this.selectedProductName = option;
    console.log("OPTION: " + option);
    for (let i = 0; i < this.productList.length; i++) {
      console.log("OPTION: " + option + " LIST: " + this.productList[i].productName);
      if (this.productList[i].productName.toLowerCase() == option.toLowerCase()) {
        console.log(" 90 BINGO product ID:"+ this.productList[i].id);
        this.product = this.productList[i];
        console.log(" PRE BINGO product ID:"+ this.product.id);
        let testDetail=new InvoiceDetail();
        testDetail.productId=this.product.id;
        testDetail.quantity=1;
        testDetail.unitPrice=this.product.price;
        testDetail.total=this.product.price*1;
        console.log("BINGO product ID:"+ testDetail.productId + ", "+testDetail.total);
        /*
        this.auxDetail.productId=this.product.id;
        
        this.auxDetail.quantity=1;
        this.auxDetail.unitPrice=this.product.price;
        this.auxDetail.total=this.auxDetail.unitPrice*this.auxDetail.quantity;
*/
        this.productDetailList.push(this.product);
        this.detailList.push(testDetail);
        this.updateTotalPrice();
      }
    }


  
  }




  updateInvoicePrice(subtotal: number, customerInvoice: CustomerInvoice): CustomerInvoice {
    customerInvoice.subtotal = subtotal;
    customerInvoice.vatPercentage = 0.21;
    customerInvoice.vat = customerInvoice.vatPercentage * customerInvoice.subtotal;
    customerInvoice.total = customerInvoice.subtotal + customerInvoice.vat;


    return customerInvoice;

  }


  updateTotalPrice():void{
    this.total = 0;
    for (let i = 0; i < this.productDetailList.length; i++) {

      this.total = this.total + this.productDetailList[i].price;
    }
    this.total=this.total+this.total*0.21;
  }


  saveInvoice():void{
    console.log(this.newCustomerInvoice.customerId);
    this.newCustomerInvoice.details=null;
    this.newCustomerInvoice.details=[];
    this.newCustomerInvoice.id=null;
    for(let i=0;i<this.detailList.length;i++){
     /*agragamos los detalles a la factura*/
      this.newCustomerInvoice.details.push(this.detailList[i]);


      /*actualizamos el inventario de productos Aqui restamos*/
      this.productDetailList[i].stock=this.productDetailList[i].stock-this.detailList[i].quantity;
      this.serviceProduct.updateProduct(this.productDetailList[i]).subscribe(updatedProduct=>{
        console.log("Stock nuevo:"+updatedProduct.stock);
      });
    }
    this.updateTotalPrice();
    this.newCustomerInvoice.subtotal=this.total;
    this.updateInvoicePrice(this.newCustomerInvoice.subtotal,this.newCustomerInvoice);

    this.serviceInvoice.createCustomerInvoice(this.newCustomerInvoice).subscribe(customerInvoice => {
      this.newCustomerInvoice = customerInvoice;
     
      alert("INVOICE:"+this.newCustomerInvoice.id+" CREATED");
    });

    this.router.navigate(['/home']);
  }







}








