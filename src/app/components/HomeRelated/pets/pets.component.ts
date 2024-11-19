import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DBSService } from 'src/app/services/dbs.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PerfilMascoComponent } from '../perfil-masco/perfil-masco.component';
import { Mascota } from 'src/app/class/mascota';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent  implements OnInit {

  mascotas$: Observable<any[]>;

  userId:any;
  nombre:string;
  apellido:string;
  especie:string;
  raza:string;
  dueno:string;
  createdAt:any;


  constructor(private router:Router,
              public usuarios : UsuariosService,
              public dbs : DBSService,
              private afAuth : AngularFireAuth,
              private modelCtrl : ModalController,
  ) { }

  ngOnInit() {

    this.usuarios.obtenerUsuario().then(user => (
      this.userId =user.uid))

      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid; 
          this.mascotas$ = this.dbs.getMascotasByUserId(this.userId);
        } else {
          this.userId = null;
        }
      });

  }
  perfilMascota(){
    this.router.navigate(['/petperil']);
  }

  crearMascota(){
    this.router.navigate(['home/crear-pet']);
  }
  
  async openPet(mascota:Mascota){
    const modal = await this.modelCtrl.create({
      component: PerfilMascoComponent,
      componentProps:{id:mascota.id}
    })
    await modal.present()
  }


}
