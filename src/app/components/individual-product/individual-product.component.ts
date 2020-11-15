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
  product:Product;
  constructor(private service:ProductService,private router:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    
  }

}
