import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetServicioService } from '../servicio/get-servicio.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  constructor(private ruta: Router, private getServicio: GetServicioService){}
  volverAlHome (){
    this.ruta.navigate(['']);
  }
  ngOnInit(): void {
  }
}
