import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private notificationId = 0;
  constructor() { }

  async initPerm(){
    await LocalNotifications.requestPermissions();
  }

  async CrearNotificacion(titulo: string, desc: string, hora: Date){
    this.notificationId++;
    await LocalNotifications.schedule({
      notifications: [{
        title: titulo,
        body: desc,
        id:this.notificationId,
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

  async ListarNotificaciones(){
    const lista = await LocalNotifications.getPending();
    return lista;
  }

  getCurrentNotificationId(): number {
    return this.notificationId;
  }
}
