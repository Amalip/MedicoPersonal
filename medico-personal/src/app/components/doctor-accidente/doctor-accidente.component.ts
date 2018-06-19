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

  @Input() id: number; 
  accidente = new Historial(); 
  historial: Historial[] = []; 

  constructor(private router: Router,
    private historialService: HistorialService) { }

  ngOnInit() {
    this.getHistorial(); 
  }

  goTo(event, page:number){
    switch(page){
      case 1:
      this.router.navigateByUrl('/doctor/'+this.id+'/nube');
      break; 
      case 2:
      this.router.navigateByUrl('/doctor/'+this.id+'/historial/'+this.id);
      break; 
      case 3:
      this.router.navigateByUrl('/doctor/'+this.id+'/receta');
      break; 
    }
  }

  getHistorial(callback?: () => void): void{
    this.historialService.getHistorial(this.id).subscribe((historial:Historial[]) => {
      this.historial = historial; 
      this.accidente = this.historial[this.historial.length - 1]; 
      if(callback)
        callback(); 
    })
  }
}
