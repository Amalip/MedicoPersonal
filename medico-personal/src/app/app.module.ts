import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoAsistenteComponent } from './components/info-asistente/info-asistente.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';

import { PacientesService } from './services/pacientes.service';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { DoctorAccidenteComponent } from './components/doctor-accidente/doctor-accidente.component';
import { RecetaComponent } from './components/receta/receta.component';
import { HistorialComponent } from './components/historial/historial.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NubePersonalComponent } from './components/nube-personal/nube-personal.component'; 

const routes = [ 
  {
    path: 'doctor',
    component: DoctorDashboardComponent, 
    children: [
      {
        path: 'historial/:id',
        component: HistorialComponent
      }, 
      {
        path: 'nube/:id',
        component: NubePersonalComponent
      },
      {
        path: 'receta',
        component: RecetaComponent
      }
    ] 
  }, 
  {
    path:'**', 
    component: NotFoundComponent
  }
]; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoAsistenteComponent,
    HospitalComponent,
    HospitalesComponent,
    DoctorDashboardComponent,
    DoctorAccidenteComponent,
    RecetaComponent,
    HistorialComponent,
    NotFoundComponent,
    NubePersonalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
