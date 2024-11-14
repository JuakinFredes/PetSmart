import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil-u',
  templateUrl: './perfil-u.component.html',
  styleUrls: ['./perfil-u.component.scss'],
})
export class PerfilUComponent  implements OnInit {

  id: number | undefined;
  nombre: string | undefined;
  contrasena: string | undefined;
  correo: string | undefined; 

  constructor(public usuarios : UsuariosService,
              public router : Router,
              public loadingControl : LoadingController,
  ) { }

  ngOnInit() {}

  async eliminarUsuario(){
    const loading = await this.loadingControl.create();
    await this.usuarios.eliminarUsuario()
    this.router.navigate(['plogin/login'])
    loading.dismiss()
  }

}
