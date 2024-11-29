import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NotificacionesService } from 'src/app/services/notificaciones.service';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss'],
})
export class AlarmasComponent  implements OnInit {

  formRegistro: FormGroup;
  titulo : string;
  desc : string;
  hora : Date;


  constructor(public route : Router,
              public formBuilder: FormBuilder,
              private notificacion : NotificacionesService,
              public loadingControl : LoadingController
            ) { }

  ngOnInit() {
    console.log("consola")
    this.formRegistro = this.formBuilder.group({
      titulo : ['', [Validators.required]],
      desc : ['', [Validators.required,
      ]],
    })

  }

  async crearAlarma(){

    const numericId = (Math.floor(Math.random() * 1e12));
    console.log("en crearAlarma titulo:",this.titulo," desc:",this.desc," idN: ",numericId," hora:",this.hora)
    const loading = await this.loadingControl.create();

      this.notificacion.CrearNotificacion(this.titulo,
                                          this.desc,
                                          numericId,
                                          this.hora)

    console.log("saliendo de crearAlarma")
    loading.dismiss()
  }

  goBack(){
    this.route.navigate(['home/agenda'])
  }

}
