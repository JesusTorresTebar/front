import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-invoice-selection',
  templateUrl: './create-invoice-selection.component.html',
  styleUrls: ['./create-invoice-selection.component.css']
})
export class CreateInvoiceSelectionComponent implements OnInit {
  titulo: string = 'Select Invoice Type';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public providerInvoice():void{
    this.router.navigate(['/provider-invoice']);
  
  }

  public customerInvoice():void{
    this.router.navigate(['/customer-invoice']);
  
  }

}
