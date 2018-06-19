import { Component, OnInit, Input } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';
import { usuario } from '../../models/usuario.models';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';
import { Taxi } from '../../models/taxi.models';
import { TaxiService } from '../../services/taxi.service';

@Component({
  selector: '[app-hospital]',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

 
  @Input() paciente: Paciente;

  constructor(private taxiService: TaxiService) {
    

   }

  ngOnInit() {
  }

  callTaxi(){
  }



}
