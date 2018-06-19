import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../../models/paciente.models';
import { PacientesService } from '../../services/pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() rol: string;
  citas: Paciente[] = [];
  paciente = 0;
  @Input() id: string; 
  usuario:usuario;
  @Output() userFound = new EventEmitter<usuario>();

  constructor(private pacienteService: PacientesService, 
    private router: Router, 
    private usuarioService: UsuarioService) {
    this.citas = this.pacienteService.getPacientes(); 
   }

  ngOnInit() {
  }


  getUserById(callback?: () => void) :void{
    console.log(this.id);
    this.usuarioService.getUsuarioData(this.id).subscribe((usuario: usuario) => {
      this.usuario = usuario;
      this.userFound.emit(usuario);
      if (callback) {
        callback();
      }
    });
  }

  goToDash(event: any){
    this.paciente = event.target.value; 
    console.log(this.paciente); 
    this.router.navigateByUrl('/doctor/'+this.paciente);
  }
}
