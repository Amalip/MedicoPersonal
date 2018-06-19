import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.models';
import { usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-info-asistente',
  templateUrl: './info-asistente.component.html',
  styleUrls: ['./info-asistente.component.css']
})
export class InfoAsistenteComponent implements OnInit {

  
  usuario: usuario;

  constructor() { 
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

  }

  ngOnInit() {
  }

}
