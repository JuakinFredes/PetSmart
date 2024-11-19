import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/class/usuario';
import { DBSService } from 'src/app/services/dbs.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil-u',
  templateUrl: './perfil-u.component.html',
  styleUrls: ['./perfil-u.component.scss'],
})
export class PerfilUComponent  implements OnInit {

  u:Usuario
  userId: string

  constructor(public usuarios : UsuariosService,
              public router : Router,
              public loadingControl : LoadingController,
              public afAuth : AngularFireAuth,
              public dbs : DBSService,
              public route : ActivatedRoute,
              private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.usuarios.obtenerUsuario().then(user => (
      this.userId =user.uid))

      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid; 
          this.dbs.getDocById(this.userId,'Usuarios').subscribe(res =>{
            this.u = res
          })
        } else {
          this.userId = null;
        }
      });
  }

  async eliminarUsuario(){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Eliminar',
        message: 'Va a eliminar una su cuenta ¿Esta seguro?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            text: 'Si',
            handler: async () => {
              const loading = await this.loadingControl.create();
              await this.usuarios.eliminarUsuario()
              await this.dbs.deleteDocumentID('Usuarios', this.userId);
              this.router.navigate(['plogin/login'])
              loading.dismiss()
            }
          }
        ]
      });
  
      await alert.present();
  }

}


