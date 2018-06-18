import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';

@Component({
  selector: 'app-doctor-accidente',
  templateUrl: './doctor-accidente.component.html',
  styleUrls: ['./doctor-accidente.component.css']
})

export class DoctorAccidenteComponent implements OnInit {

  @Input() paciente: Paciente; 
  accidente = new Historial(); 
  constructor(private router: Router) { }

  ngOnInit() {
    this.accidente.descripcion = 'Un accidente super feoooooo';
  }

  goTo(event, page:number){
    switch(page){
      case 1:
      this.router.navigateByUrl('/doctor/nube/'+this.paciente._idPaciente);
      break; 
      case 2:
      this.router.navigateByUrl('/doctor/historial/'+this.paciente._idPaciente);
      break; 
      case 3:
      this.router.navigateByUrl('/doctor/receta/'+this.paciente._idPaciente);
      break; 
    }
  }
}
