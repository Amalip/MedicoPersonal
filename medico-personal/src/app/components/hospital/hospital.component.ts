import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';
import { usuario } from '../../models/usuario.models';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';
import { TaxiService } from '../../services/taxi.service';
import { Taxi } from '../../models/taxi.models';

@Component({
  selector: '[app-hospital]',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  @Input() hospital: hospitales;
  @Input() usuario: usuario;
  @Input() paciente: Paciente;
  @Output() userFound = new EventEmitter<usuario>();
  constructor(private taxiService: TaxiService) {
    

   }

  ngOnInit() {
  }

  callTaxi(){
    const taxi = new Taxi();
    taxi.destino = this.hospital.ubicacion;
    taxi.idUsuario = this.usuario.id;
    

    this.taxiService.solicitarTaxi(taxi);
  }


}
