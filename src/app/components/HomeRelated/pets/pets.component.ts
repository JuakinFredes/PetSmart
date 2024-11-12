import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent  implements OnInit {

  //mascotas$: Observable<any[]>;

  userId:any;
  nombre:string;
  apellido:string;
  especie:string;
  raza:string;
  dueno:string;
  createdAt:any;


  constructor(private router:Router,) { }

  ngOnInit() {
    /**
    this.autentificacion.obtenerUsuario().then(user => (
      this.userId =user.uid))

      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid; 
          this.mascotas$ = this.firebaseService.getMascotasByUserId(this.userId);
        } else {
          this.userId = null;
        }
      });
       */
  }
  perfilMascota(){
    this.router.navigate(['/petperil']);
  }

  crearMascota(){
    this.router.navigate(['home/crear-pet']);
  }


}
