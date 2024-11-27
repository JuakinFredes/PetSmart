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
    this.formRegistro = this.formBuilder.group({
      titulo : ['', [Validators.required]],
      desc : ['', [Validators.required,
      ]],
    })

  }

  async crearAlarma(){
    const loading = await this.loadingControl.create();
    if(this.formRegistro?.valid){
      this.notificacion.CrearNotificacion(this.titulo,
                                          this.desc,
                                          this.hora)
    }
    loading.dismiss()
  }

  goBack(){
    this.route.navigate(['home/agenda'])
  }

}
