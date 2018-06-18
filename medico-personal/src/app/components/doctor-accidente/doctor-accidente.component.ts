import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Historial } from '../../models/historial.models';
import { Paciente } from '../../models/paciente.models';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-doctor-accidente',
  templateUrl: './doctor-accidente.component.html',
  styleUrls: ['./doctor-accidente.component.css']
})

export class DoctorAccidenteComponent implements OnInit {

  @Input() paciente: Paciente; 
  accidente = new Historial(); 
  constructor(private router: Router,
    private historialService: HistorialService) { }

  ngOnInit() {
    this.accidente.descripcion = 'Un accidente super feoooooo';
  }

  goTo(event, page:number){
    switch(page){
      case 1:
      this.router.navigateByUrl('/doctor/'+this.paciente._idPaciente+'/nube/'+this.paciente._idPaciente);
      break; 
      case 2:
      this.router.navigateByUrl('/doctor/'+this.paciente._idPaciente+'/historial/'+this.paciente._idPaciente);
      break; 
      case 3:
      this.router.navigateByUrl('/doctor/'+this.paciente._idPaciente+'/receta/'+this.paciente._idPaciente);
      break; 
    }
  }

  getHistorial(id:number){

  }
}
