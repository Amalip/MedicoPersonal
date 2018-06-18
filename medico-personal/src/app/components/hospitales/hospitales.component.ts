import { Component, OnInit } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  hospitales: hospitales[] = [];

  constructor() {
    const hosp = new hospitales();
    hosp.idHospital = 1;
    hosp.nombre = "Hospital Galleta";
    hosp.cobertura = 80;
    const ubi = new ubicacion();
    ubi.lat = 234456.2436;
    ubi.lng = 12456.42564; 
    hosp.direccion = "Colonia patito 1245";
    hosp.ubicacion = ubi;
    this.hospitales.push(hosp);
    this.hospitales.push(hosp);
   }

  ngOnInit() {
  }

  

}
