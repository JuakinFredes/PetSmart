import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocalNotifications } from '@capacitor/local-notifications';
import { scheduled } from 'rxjs';

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

  getCurrentNotificationId(): number {
    return this.notificationId;
  }
}
