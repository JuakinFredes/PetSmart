import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Mascota } from 'src/app/class/mascota';

@Component({
  selector: 'app-crear-pet',
  templateUrl: './crear-pet.component.html',
  styleUrls: ['./crear-pet.component.scss'],
})
export class CrearPetComponent  implements OnInit {

  newMascota: Mascota = { nombre: '', apellido: '', especie: '', raza: '', fNaci: new Date(), dueno: '', id:'', userId:'', };
  userId: string;

  constructor(private router :Router,
              private toast : ToastController,) { }


    //en el codigo original los campos estaban con null por si falla
    initMascota(){
    this.newMascota = {
      nombre: '', 
      apellido: '', 
      especie: '', 
      raza: '', 
      fNaci: new Date(), 
      dueno: '', 
      id: '',//this.firebaseService.crearIdDoc() , 
      userId: this.userId
    }
  }

  async mascotaAgregada(){
    //await this.firebaseService.crearDocID(this.newMascota,'Mascotas',this.newMascota.id)
    this.router.navigate(['/home/pets'])
  }

  ngOnInit() {
    /** 
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
    */
  }

}
