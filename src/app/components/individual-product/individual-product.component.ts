import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.css']
})
export class IndividualProductComponent implements OnInit {
  titulo: string = 'Product Details';
  product:Product;
  newProduct:Product;
  sub:any;
  id:string;
  constructor(private service:ProductService,private route:ActivatedRoute,private router:Router) {
  
   }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.finddProductById(this.id).subscribe(product =>{
        this.product=product;
        this.newProduct=product;
      });
    });
    
  }

  public updateProduct():void{
    this.service.createProduct(this.newProduct).subscribe(product =>{
    console.log(this.newProduct);
    alert(`Product Updated.ID:${this.newProduct.id}`);
    this.router.navigate(['/products']);
    });
    
  }

  public deleteProduct():void{
   this.service.deleteProduct(this.product.id).subscribe();
   alert(`Product Deleted.ID:${this.newProduct.id}`);
   this.router.navigate(['/products']);
  }

  public backToList():void{
    this.router.navigate(['/products']);
  }

}
