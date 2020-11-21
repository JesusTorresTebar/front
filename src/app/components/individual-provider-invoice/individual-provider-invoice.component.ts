import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderInvoice } from 'src/app/models/providerInvoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-individual-provider-invoice',
  templateUrl: './individual-provider-invoice.component.html',
  styleUrls: ['./individual-provider-invoice.component.css']
})
export class IndividualProviderInvoiceComponent implements OnInit {
  titulo: string = 'Provider Invoice Details';
  providerInvoice:ProviderInvoice;
  newProviderInvoice:ProviderInvoice;
  sub:any;
  id:string;

  constructor(private service:InvoiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.findProviderInvoiceById(+this.id).subscribe(providerInvoice =>{
        this.providerInvoice=providerInvoice;
        this.newProviderInvoice=providerInvoice;
      });
    });
  }
}
