import { Component, OnInit, Input } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';
import { usuario } from '../../models/usuario.models';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';

@Component({
  selector: '[app-hospital]',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  @Input() hospital: hospitales;
  @Input() usuario: usuario;
  @Input() paciente: Paciente;

  constructor() {
    

   }

  ngOnInit() {
  }

  callTaxi(){

  }



}
