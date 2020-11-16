import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  titulo: string = 'Add Product';
  provider: Provider=new Provider();


  constructor(private service: InvoiceService, private router:Router) { }

  ngOnInit(): void {
  }

  public saveProvider():void{
    this.service.createProvider(this.provider).subscribe(provider =>{
    console.log(this.provider);
    alert(`Provider Created.CIF:${this.provider.id}`);
    this.router.navigate(['/providers']);
    });
    
  }

  public backToList():void{
    this.router.navigate(['/home']);
  }
}
