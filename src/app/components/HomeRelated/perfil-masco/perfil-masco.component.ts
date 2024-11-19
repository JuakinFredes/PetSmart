import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  ) { }

  ngOnInit() {
    this.dbs.getMascotaById(this.id).subscribe(res =>{
      this.mascota = res
    })
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
