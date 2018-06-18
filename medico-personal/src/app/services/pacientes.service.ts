import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente.models';

@Injectable()
export class PacientesService {

  pacientes: Paciente[]; 

  constructor() { 
    this.pacientes = [
      new Paciente(1,'Filomeno Cosa RaRa'), 
      new Paciente(2,'El Pato Cuack Cuack'),
      new Paciente(3,'Oh My Darling')
    ]; 
  }

  getPacientes(){
    return this.pacientes; 
  }
}
