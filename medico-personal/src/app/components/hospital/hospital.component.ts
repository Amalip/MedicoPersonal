import { Component, OnInit, Input } from '@angular/core';
import { hospitales } from '../../models/hospital.models';
import { ubicacion } from '../../models/ubicacion.models';

@Component({
  selector: '[app-hospital]',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  @Input() hospital: hospitales;

  constructor() {
    

   }

  ngOnInit() {
  }

}
