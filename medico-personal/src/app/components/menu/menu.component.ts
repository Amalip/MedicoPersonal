import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rol="asistentes";
  citas: string[] = [];

  constructor() {
    this.citas = ['',''];
   }

  ngOnInit() {
  }

}
