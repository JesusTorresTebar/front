import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  titulo: string = 'Provider List';
  constructor() { }

  ngOnInit(): void {
  }

}
