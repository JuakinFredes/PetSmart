import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DBSService } from 'src/app/services/dbs.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

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


}
