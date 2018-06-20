import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { usuario } from '../../models/usuario.models';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';
import { hospitales } from '../../models/hospital.models';
import { HistorialService } from '../../services/historial.service';
import { request } from '../../models/request.models';
import { UsuarioService } from '../../services/usuario.service';

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
  @Output() hospitalEvent = new EventEmitter<hospitales[]>();
  request: request;

  constructor(private historialService: HistorialService, private usuarioService: UsuarioService  ) { 
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

  // getUserById(callback?: () => void) :void{
  //   console.log(this.id);
  //   debugger;
  //   this.usuarioService.getUsuarioData(this.id).subscribe((usuario: usuario) => {
  //     debugger;
  //     this.usuario = usuario;
  //     this.userFound.emit(usuario);
  //     localStorage.setItem('userKey', usuario.id);
  //     if (callback) {
  //       callback();
  //     }
  //   });
  // }

  verifyNSS(){
    if (this.usuario.nss = null){
      
    }else{
      
    }
  }



  createHistorial(callback?: () => void): void{
    console.log("entro");
    const histo = new Historial;
    histo.idPaciente = 2;
    histo.nombreHospital = "Hospital Patito";
    histo.descripcion = this.descripcion;
    let date = new Date();
    histo.fecha = date.toDateString();
    histo.estatus = 1;
    
    this.historialService.insertHistorial(histo).subscribe((req:request) => {
      debugger;
      this.request = req;

      if(callback)
        callback(); 
    });
    debugger;
  }

}
