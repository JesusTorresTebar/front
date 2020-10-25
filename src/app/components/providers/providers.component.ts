import { Component, OnInit, Provider } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  titulo: string = 'Provider List';
  providers: Provider[];
  constructor(private service:InvoiceService) { }

  ngOnInit(): void {
    this.service.findAllProvider().subscribe(providers=>{
      this.providers=providers;
    })
  }

}
