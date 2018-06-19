import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Historial } from '../../models/historial.models';
import { HistorialService } from '../../services/historial.service';
import { Paciente } from '../../models/paciente.models';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial: Historial[] = []; 
  paciente: Paciente; 
  
  constructor(private router: Router,
    private historialService: HistorialService) { }

  ngOnInit() {
  }

  getHistorial(callback?: () => void): void{
    this.historialService.getHistorial(this.paciente._idPaciente).subscribe((historial:Historial[]) => {
      this.historial = historial; 
      if(callback)
        callback(); 
    })
  }
}
