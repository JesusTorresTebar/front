import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from 'src/app/models/zone';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  selectedZone: Zone;
  titulo: string = 'Zone List';
  zones: Zone[];
  sub:any;
  id:string;
  constructor(private service:StorageService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.id=params['id'];

      this.service.findZonesByBuildingId(this.id).subscribe(zones =>{
        this.zones=zones;
      });
    });


  }

  
  onSelect(zone:Zone): void {
    this.selectedZone=zone;
    console.log(this.selectedZone.id);
    alert("La Zona elegida ha sido: Building: "+this.id+" Zone:"+this.selectedZone.id);
    this.router.navigate(['/home']);
    
  }

}
