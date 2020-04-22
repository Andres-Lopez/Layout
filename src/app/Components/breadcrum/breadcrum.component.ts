import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent implements OnInit {

  constructor() { }

  pages = [
    "Gestión citas",
    "Pacientes en lista de espera",
    "Ventana"
  ]

  ngOnInit(): void {
  }

}
