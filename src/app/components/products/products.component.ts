import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  titulo: string = 'Products List';
  products: Product[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.findAllProduct().subscribe(products =>{
      this.products=products;
    });
  }

}
