import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoAsistenteComponent } from './components/info-asistente/info-asistente.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoAsistenteComponent,
    HospitalComponent,
    HospitalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
