import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  
  usuario: usuario;
  @Input() paciente: Paciente;
  @Input() hospital: hospitales;
  descripcion: string;
  @Output() userFound = new EventEmitter<hospitales[]>();

  constructor(private historialService: HistorialService  ) { 
    const usua = new usuario();
    usua.nombre = "Fulanito";
    usua.apellidos = "Perez Perez";
    usua.ciudad = "Leon";
    usua.f_Nacimiento = "12/12/12";
    usua.nss = "435557tyde";
    usua.ocupación = "estudiante";
    usua.pais = "mexico";
    usua.telefono = "12345";
    this.usuario = usua;
  }

  ngOnInit() {
  }

  getUserInfo(user: usuario){
    this.usuario = user;
  }

  verifyNSS(){
    if (this.usuario.nss = null){
      
    }else{
      
    }
  }



  createHistorial(){
    console.log("entro");
    const histo = new Historial;
    histo.idPaciente = 2;
    histo.nombreHospital = "Hospital Patito";
    histo.descripcion = this.descripcion;
    let date = new Date();
    histo.fecha = date.toDateString();
    histo.estatus = 1;
    
    this.historialService.insertHistorial(histo);
    debugger;
  }

}
