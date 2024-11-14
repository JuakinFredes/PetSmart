import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { Mascota } from 'src/app/class/mascota';
import { DBSService } from 'src/app/services/dbs.service';

@Component({
  selector: 'app-crear-pet',
  templateUrl: './crear-pet.component.html',
  styleUrls: ['./crear-pet.component.scss'],
})
export class CrearPetComponent  implements OnInit {

  newMascota: Mascota = { nombre: '', apellido: '', especie: '', raza: '', fNaci: new Date(), dueno: '', id:'', userId:'', };
  userId: string;

  constructor(private router :Router,
              private dbs : DBSService,
              private afAuth : AngularFireAuth) { }


    initMascota(){
    this.newMascota = {
      nombre: null, 
      apellido: null, 
      especie: null, 
      raza: null, 
      fNaci: new Date(), 
      dueno: null, 
      id: this.dbs.crearIdDoc() , 
      userId: this.userId
    }
  }

  async mascotaAgregada(){
    await this.dbs.crearDocID(this.newMascota,'Mascotas',this.newMascota.id)
    this.router.navigate(['/home/pets'])
  }

  ngOnInit() {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.initMascota();
        console.log('User ID:', this.userId);
      } else {
        this.userId = null;
        console.log('No user is logged in');
      }
    });
  }

}
