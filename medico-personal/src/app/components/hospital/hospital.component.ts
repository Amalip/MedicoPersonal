import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';
import { usuario } from '../../models/usuario.models';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';
<<<<<<< HEAD
import { TaxiService } from '../../services/taxi.service';
import { Taxi } from '../../models/taxi.models';
=======
import { Taxi } from '../../models/taxi.models';
import { TaxiService } from '../../services/taxi.service';
>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7

@Component({
  selector: '[app-hospital]',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

 
  @Input() paciente: Paciente;
<<<<<<< HEAD
  @Output() userFound = new EventEmitter<usuario>();
=======

>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7
  constructor(private taxiService: TaxiService) {
    

   }

  ngOnInit() {
  }

  callTaxi(){
<<<<<<< HEAD
    const taxi = new Taxi();
    taxi.destino = this.hospital.ubicacion;
    taxi.idUsuario = this.usuario.id;
    

    this.taxiService.solicitarTaxi(taxi);
=======
>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7
  }


}
