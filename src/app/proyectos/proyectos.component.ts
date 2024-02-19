import { Component } from '@angular/core';
// import { AlertService } from '../servicio/alert.service';
import { Proyecto } from '../clases/proyecto.model';
import { AlertService } from '../servicio/alert.service';
import { ProyectoServicioService } from '../servicio/proyecto-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  public inputNombre: string = '';
  public inputPresupuesto: string = '';
  public proyecto: Proyecto = new Proyecto();
  public listaProyecto: Proyecto[] = new Array<Proyecto>();
  
  constructor(private ruta: Router, private alerta: AlertService, private proyectoService: ProyectoServicioService){

  }

  enviarMensaje(mensaje: string){
    this.alerta.mostrarMensaje(mensaje);
  }

  ngOnInit(){
    //   this.enviarMensaje("ngOnInit de HomeComponent");
  }

  agregar (){
    this.proyecto.nombre = this.inputNombre;
    this.proyecto.presupuesto = this.inputPresupuesto;
    this.proyectoService.crearProyecto(this.proyecto);

    this.ruta.navigate(['']);
  }
}
