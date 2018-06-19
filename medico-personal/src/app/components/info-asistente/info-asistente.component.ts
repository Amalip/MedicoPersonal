import { Component, OnInit, Input } from '@angular/core';
import { usuario } from '../../models/usuario.models';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';
import { hospitales } from '../../models/hospital.models';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-info-asistente',
  templateUrl: './info-asistente.component.html',
  styleUrls: ['./info-asistente.component.css']
})
export class InfoAsistenteComponent implements OnInit {

  
  usuarioInfo: usuario;
  @Input() paciente: Paciente;
  @Input() hospital: hospitales;
  descripcion: string;

  constructor(private historialService: HistorialService  ) { 
  }

  ngOnInit() {
  }

  getUserInfo(user: usuario){
    this.usuarioInfo = user;
  }

  createHistorial(){
    const histo = new Historial;
    histo.idPaciente = this.paciente.idPaciente;
    histo.nombreHospital = this.hospital.nombre;
    histo.descripcion = this.descripcion;
    let date = new Date();
    histo.fecha = date.toDateString();
    
    this.historialService.insertHistorial(histo);
  }

}
