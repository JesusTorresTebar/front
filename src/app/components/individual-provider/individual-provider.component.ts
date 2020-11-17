import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-individual-provider',
  templateUrl: './individual-provider.component.html',
  styleUrls: ['./individual-provider.component.css']
})
export class IndividualProviderComponent implements OnInit {
  provider:Provider;
  sub:any;
  id:string;
  constructor(private service:InvoiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.findProviderById(this.id).subscribe(provider =>{
        this.provider=provider;
      });
    });
    
  }

}
