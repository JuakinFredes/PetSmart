import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DBSService } from 'src/app/services/dbs.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil-u',
  templateUrl: './perfil-u.component.html',
  styleUrls: ['./perfil-u.component.scss'],
})
export class PerfilUComponent  implements OnInit {

  usuarios$: Observable<any[]>

  id: string;
  nombre: string;
  contrasena: string;
  correo: string; 

  userId:any;

  constructor(public usuarios : UsuariosService,
              public router : Router,
              public loadingControl : LoadingController,
              public afAuth : AngularFireAuth,
              public dbs : DBSService,
              public route : ActivatedRoute
  ) { }

  ngOnInit() {

    this.usuarios.obtenerUsuario().then(user => (
      this.userId =user.uid))

      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid; 
          this.usuarios$ = this.dbs.getUser(this.userId);
        } else {
          this.userId = null;
        }
      });

  }

  async eliminarUsuario(){
    const loading = await this.loadingControl.create();
    await this.usuarios.eliminarUsuario()
    await this.dbs.deleteDocumentID('Usuarios', this.userId);
    this.router.navigate(['plogin/login'])
    loading.dismiss()
  }

}
