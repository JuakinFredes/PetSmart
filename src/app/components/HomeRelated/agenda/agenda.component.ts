import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/notificaciones.service';






@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent  implements OnInit {
  id:any;
  listaN$: Promise<any>;

  constructor(public route : Router,
              private notificaciones : NotificacionesService
              ) { }


              
  async ngOnInit() {
    await this.notificaciones.initPerm();
    this.listaN$ = this.notificaciones.ListarNotificaciones();
  }

 async borrarAlarma(){
  await this.notificaciones.EliminarNotificacion();
 }


irCalendario(){
    this.route.navigate(['home/calendario'])
  }
  
  irAlarmas(){
    this.route.navigate(['home/alarmas'])
  }
}
