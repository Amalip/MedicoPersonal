import { Component, OnInit } from '@angular/core';
import { usuario } from '../../models/usuario.models';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-nube-personal',
  templateUrl: './nube-personal.component.html',
  styleUrls: ['./nube-personal.component.css']
})
export class NubePersonalComponent implements OnInit {

  usuario: usuario;
  pin: ''; 
  
  constructor(private usuarioService:UsuarioService) {
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

    //this.getUsuario(); 
   }

  ngOnInit() {
  }

  getUsuario(callback?: () => void): void{
    this.usuarioService.getUsuarioData(this.pin).subscribe((usuario:usuario)=>{
      this.usuario = usuario; 
      if(callback)
        callback();
    });
  }
}
