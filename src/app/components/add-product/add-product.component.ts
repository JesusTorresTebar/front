import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  titulo: string = 'Add Product';
  product: Product=new Product();


  constructor(private service: ProductService, private router:Router) { 

  }

  ngOnInit(): void {
  }

  public saveProduct():void{
    this.service.createProduct(this.product).subscribe(product => {
      console.log(product);
      alert(`Product Created:${product.productName}`);
      this.router.navigate(['/products']);
      
    })
  }

}
