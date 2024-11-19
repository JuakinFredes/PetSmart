import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Mascota } from 'src/app/class/mascota';
import { DBSService } from 'src/app/services/dbs.service';

@Component({
  selector: 'app-perfil-masco',
  templateUrl: './perfil-masco.component.html',
  styleUrls: ['./perfil-masco.component.scss'],
})
export class PerfilMascoComponent  implements OnInit {

  @Input() id: string

  mascota: Mascota
  

  constructor(private dbs : DBSService,
              private modalCtrl : ModalController,
              private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.dbs.getDocById(this.id,'Mascotas').subscribe(res =>{
      this.mascota = res
    })
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }



  async alert(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar',
      message: 'Va a eliminar una mascota ¿Esta seguro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Si',
          handler: () => {
            this.dbs.deleteDocumentID('Mascotas',this.id)
            this.modalCtrl.dismiss(null, 'cancel');
          }
        }
      ]
    });

    await alert.present();
  }
}
