import { Injectable } from '@angular/core';
import { Medicina } from '../models/medicina.model';

@Injectable()
export class FarmaciaService {

  medicinas: Medicina[]; 

  constructor() {
    this.medicinas = [
      new Medicina(1, 'Penicilin'),
      new Medicina(2, 'Ibuprofeno'),
      new Medicina(3, 'Diclofenaco'),
      new Medicina(4, 'Omeprazol'),
      new Medicina(5, 'Ranitidina'),
      new Medicina(6, 'Loratadina'),
      new Medicina(7, 'Losartan'),
      new Medicina(8, 'Estradiol'),
      new Medicina(9, 'Amlodipino'),
      new Medicina(10, 'Lovastatina')
    ]
   }

  getMedicinas(){
    return this.medicinas; 
  }
}
