import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from 'src/app/models/building';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css']
})
export class StoragesComponent implements OnInit {
  selectedBuilding: Building;
  titulo: string = 'Building List';
  buildings: Building[];
  showForm:boolean=false;

  addBuilding:Building=new Building();

  constructor(private service:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.service.findAllBuildings().subscribe(buildings =>{
      this.buildings=buildings;
    });
  }

  
  onSelect(building:Building): void {
    this.selectedBuilding=building;
    console.log(this.selectedBuilding.id);
    this.router.navigate(['/zones',this.selectedBuilding.id]);
    
  }

  addNewBuilding():void{
    this.showForm=true;
  }

  saveBuilding():void{
    this.service.createBuilding(this.addBuilding).subscribe(building =>{
      console.log("Se ha guardado el edificio con id:"+this.addBuilding.id);
      alert("Se ha creado el edificio con id:"+this.addBuilding.id);
      this.router.navigate(['/storages']);
    });

  }




}
