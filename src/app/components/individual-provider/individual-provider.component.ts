import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-individual-provider',
  templateUrl: './individual-provider.component.html',
  styleUrls: ['./individual-provider.component.css']
})
export class IndividualProviderComponent implements OnInit {
  titulo: string = 'Providers Details';
  provider:Provider;
  newProvider:Provider;
  sub:any;
  id:string;
  constructor(private service:InvoiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.findProviderById(this.id).subscribe(provider =>{
        this.provider=provider;
        this.newProvider=provider;
      });
    });
    
  }

  public updateProvider():void{
    this.service.createProvider(this.newProvider).subscribe(newProvider =>{
    console.log(this.newProvider);
    alert(`Provider Updated.DNI:${this.newProvider.id}`);
    this.router.navigate(['/providers']);
    });
    
  }

  public deleteProvider():void{
   this.service.deleteProvider(this.provider.id).subscribe();
   alert(`Provider Deleted.DNI:${this.newProvider.id}`);
   this.router.navigate(['/providers']);
  }

  public backToList():void{
    this.router.navigate(['/providers']);
  }

}
