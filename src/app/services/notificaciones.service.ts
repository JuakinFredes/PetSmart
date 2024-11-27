import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor() { }

  async initPerm(){
    await LocalNotifications.requestPermissions();
  }

  async CrearNotificacion(titulo: string, desc: string, hora: Date){
    const numericId = Math.floor(Math.random() * 1e12);
    await LocalNotifications.schedule({
      notifications: [{
        title: titulo,
        body: desc,
        id: numericId,
        schedule: {
                   at: hora, 
                   every: "day"
                  }
    }]
    })
  }

  async EliminarNotificacion(idN: number){
    await LocalNotifications.cancel({
      notifications: [{
        id: idN
      }]
    });
  }

  ListarNotificaciones(): Observable<any>{
    const lista = from(LocalNotifications.getPending());
    return lista as Observable<any>;
  }


}
