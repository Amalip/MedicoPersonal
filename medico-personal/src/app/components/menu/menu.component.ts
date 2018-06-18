import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from '../../models/paciente.models';
import { PacientesService } from '../../services/pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() rol: string;
  citas: Paciente[] = [];

  constructor(private pacienteService: PacientesService, 
    private router: Router) {
    this.citas = this.pacienteService.getPacientes(); 
   }

  ngOnInit() {
  }

  
}
