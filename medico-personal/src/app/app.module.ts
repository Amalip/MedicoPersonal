import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoAsistenteComponent } from './components/info-asistente/info-asistente.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';

import { PacientesService } from './services/pacientes.service';
import { HistorialService } from './services/historial.service'; 
import { OrdenService } from './services/orden.service'; 
import { FarmaciaService } from './services/farmacia.service'; 
import { UsuarioService } from './services/usuario.service';
import { HospitalService } from './services/hospital.service';
import { PolizaService } from './services/poliza.service';

import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { DoctorAccidenteComponent } from './components/doctor-accidente/doctor-accidente.component';
import { RecetaComponent } from './components/receta/receta.component';
import { HistorialComponent } from './components/historial/historial.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NubePersonalComponent } from './components/nube-personal/nube-personal.component';
import { AsistenteDashboardComponent } from './components/asistente-dashboard/asistente-dashboard.component'; 

const routes = [ 
  {
    path: 'doctor/:id',
    component: DoctorDashboardComponent, 
    children: [
      {
        path: 'historial/:childid',
        component: HistorialComponent
      }, 
      {
        path: 'nube',
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
    NubePersonalComponent,
    AsistenteDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PacientesService, HistorialService, UsuarioService,HospitalService,PolizaService],
=======
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [PacientesService, 
    HistorialService, 
    UsuarioService,
    FarmaciaService, 
    OrdenService],
>>>>>>> 32e70b6d4895b99b31cdbbc318f9d4516a48b7f7
  bootstrap: [AppComponent]
})
export class AppModule { }
