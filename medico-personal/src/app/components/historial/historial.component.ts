import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Historial } from '../../models/historial.models';
import { HistorialService } from '../../services/historial.service';
import { Paciente } from '../../models/paciente.models';
//import { TaxiService } from '../../services/taxi.service';
import { hospitales } from '../../models/hospital.models';
import { Taxi } from '../../models/taxi.models';
import { ubicacion } from '../../models/ubicacion.models';
import { usuario } from '../../models/usuario.models';

@Component({
  selector: '[app-historial]',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial: Historial[] = []; 
  //paciente: Paciente; 
  id:number; 
  
  /*@Input() hospital: hospitales;
  @Input() usuario: usuario;*/

  constructor(private route: ActivatedRoute,
    private router: Router,
    private historialService: HistorialService) { 
      this.id = this.route.snapshot.params['childid']; 
      console.log(this.id); 
    }

  ngOnInit() {
    
    const hist = new Historial(); 
    hist.fecha = '12/12/2015'; 
    hist.descripcion = 'Pasaron muchas cosas feas que hicieron al paciente llorar'; 
    hist.nombreHospital = 'Hosiptal kawayoso'; 

    this.historial = [hist]; 
  }

  getHistorial(callback?: () => void): void{
    this.historialService.getHistorial(this.id).subscribe((historial:Historial[]) => {
      this.historial = historial; 
      if(callback)
        callback(); 
    })
  }

}
