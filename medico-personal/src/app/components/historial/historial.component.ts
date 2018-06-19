import { Component, OnInit, Input } from '@angular/core';
import { TaxiService } from '../../services/taxi.service';
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

  @Input() hospital: hospitales;
  @Input() usuario: usuario;

  constructor() { }

  ngOnInit() {
  }
}
