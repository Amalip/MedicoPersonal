import { Component, OnInit, Input } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';
import { usuario } from '../../models/usuario.models';
import { poliza } from '../../models/poliza.models';
import { HospitalService } from '../../services/hospital.service';
import { PolizaService } from '../../services/poliza.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  hospitales: hospitales[] = [];
  nss: number;
  poliza: poliza;

  constructor(private hospitalService: HospitalService, private polizaService: PolizaService) {
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

  getHospitales(callback?: () => void): void {
    this.hospitalService.getHospitales().subscribe((hospitales: hospitales[]) => {
      this.hospitales = hospitales;
      if (callback) {
        callback();
      }
    });
  }

  getPoliza(callback?: () => void): void {
    this.polizaService.getPolizaData(this.nss).subscribe((poli: poliza) => {
      this.poliza = poli;
      if (callback) {
        callback();
      }
    });
  }

}
