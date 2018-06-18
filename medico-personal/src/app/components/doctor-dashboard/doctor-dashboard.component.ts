import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../models/paciente.models';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  id: number; 
  name: string; 
  paciente: any; 

  constructor(private route: ActivatedRoute, 
    private router: Router) {
      this.id = this.route.snapshot.params['id']; 
      this.name = this.route.snapshot.params['name']; 

      this.paciente = new Paciente(this.id, this.name); 
    }

  ngOnInit() {
    //this.id = 1; 
  }
}
