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

  async CrearNotificacion(titulo: string, desc: string,idN: number, hora: Date){
    console.log("en CrearNotificacion datos de entrada")
    console.log("titulo: ",titulo," desc: ",desc," id: ",idN," hora: ",hora )
      await LocalNotifications.schedule({
      notifications: [{
                        title: titulo,
                        body: desc,
                        id: idN,
                        schedule: {
                                  at: hora, 
                                  every: "day"
                                  }
                      }]
    })
    console.log("saliendo CrearNotificacion")
  }

  async EliminarNotificacion(idN: number){
    console.log("en EliminarNotificacion")
    await LocalNotifications.cancel({
      notifications: [{
        id: idN
      }]
    });
    console.log("saliendo EliminarNotificacion")
  }

  ListarNotificaciones(): Observable<any>{
    const lista = from(LocalNotifications.getPending());
    return lista as Observable<any>;
  }


}
