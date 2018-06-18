import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-accidente',
  templateUrl: './doctor-accidente.component.html',
  styleUrls: ['./doctor-accidente.component.css']
})

export class DoctorAccidenteComponent implements OnInit {

  @Input() id: number; 

  constructor(private router: Router) { }

  ngOnInit() {

  }

  goTo(event, page:number){
    switch(page){
      case 1:
      this.router.navigateByUrl('/doctor/nube/'+this.id);
      break; 
      case 2:
      this.router.navigateByUrl('/doctor/historial/'+this.id);
      break; 
      case 3:
      this.router.navigateByUrl('/doctor/receta');
      break; 
    }
  }
}
