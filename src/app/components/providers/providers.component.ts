import { Component, OnInit} from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Provider } from 'src/app/models/provider';
import { Router } from '@angular/router';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  selectedProvidder: Provider;
  titulo: string = 'Provider List';
  providers: Provider[];
  constructor(private service:InvoiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.findAllProvider().subscribe(providers=>{
      this.providers=providers;
    });
  }

  onSelect(provider:Provider): void {
    this.selectedProvidder=provider;
    console.log(this.selectedProvidder.id);
    this.router.navigate(['/individual-provider',this.selectedProvidder.id]);
    
  }

}
