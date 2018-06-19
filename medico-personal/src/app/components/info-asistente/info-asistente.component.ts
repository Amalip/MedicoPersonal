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

<<<<<<< HEAD
  constructor(private historialService: HistorialService  ) { 
=======
  constructor(private historial: HistorialService  ) { 
    const usua = new usuario();
    usua.nombre = "Fulanito";
    usua.apellidos = "Perez Perez";
    usua.ciudad = "Leon";
    usua.f_Nacimiento = "12/12/12";
    usua.id = "2321";
    usua.nss = "12345678";
    usua.ocupación = "estudianre";
    usua.pais = "Mexico";
    usua.telefono = "123456789";
    this.usuario = usua;

>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7
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
