import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-perfil',
  templateUrl: './pet-perfil.component.html',
  styleUrls: ['./pet-perfil.component.scss'],
})
export class PetPerfilComponent  implements OnInit {

  userId:any;
  nombre:string;
  apellido:string;
  especie:string;
  raza:string;
  dueno:string;
  fNaci:any;

  id: string;

  constructor() { }

  ngOnInit() {
    /** 
    this.autentificacion.obtenerUsuario().then(user => (
      this.userId = user.uid
    ));
  
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id:',this.id)

    this.firebaseService.getMascota(this.id).subscribe({
      next: mascota => {
        if (mascota) {
          this.nombre = mascota.nombre;
          this.apellido = mascota.apellido;
          this.especie = mascota.especie;
          this.raza = mascota.raza;
          this.dueno = mascota.dueno;
          this.fNaci = mascota.fNaci;
        }
      },
      error: err => {
        console.error('Error al obtener la mascota:', err);
      }
    });
    */
  }

}
