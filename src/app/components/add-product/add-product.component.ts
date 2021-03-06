import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Risk } from 'src/app/models/risk';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  titulo: string = 'Add Product';
  product: Product=new Product();

  risk: Risk=new Risk();
  


  constructor(private service: ProductService, private router:Router) { 

  }

  ngOnInit(): void {
    this.product.risks=[];
    (this.product).risks.push(this.risk);
  }

  public saveProduct():void{
    this.service.createProduct(this.product).subscribe(product => {
    console.log(this.product);
    alert(`Product Created:${this.product.productName}`);
    this.router.navigate(['/products']);
      
    });
    
  }

  public backToList():void{
    this.router.navigate(['/home']);
  }

}
