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

  
  @Input() usuario: usuario;
  @Input() paciente: Paciente;
  @Input() hospital: hospitales;

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

  }

  ngOnInit() {
  }

  createHistorial(){

  }

}
