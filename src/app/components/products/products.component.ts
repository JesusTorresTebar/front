import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedProduct: Product;
  titulo: string = 'Products List';
  products: Product[];
  constructor(private service:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.service.findAllProduct().subscribe(products =>{
      this.products=products;
    });
  }

  
  onSelect(product:Product): void {
    this.selectedProduct=product;
    console.log(this.selectedProduct.productName);
    this.router.navigate(['/individual-product',this.selectedProduct.id]);
    
  }

}
