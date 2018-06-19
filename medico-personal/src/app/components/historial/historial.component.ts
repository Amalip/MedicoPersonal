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

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private route: ActivatedRoute,
    private router: Router,
    private historialService: HistorialService) { 
      this.id = this.route.snapshot.params['childid']; 
      console.log(this.id); 
    }
>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7

  ngOnInit() {
    //this.getHistorial(); 
    
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
<<<<<<< HEAD
=======

 /* callTaxi(){
    const taxi = new Taxi();
    taxi.destino = this.hospital.ubicacion;
    taxi.idUsuario = this.usuario.id;
    this.taxiService.solicitarTaxi(taxi);
  }*/

>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7
}
