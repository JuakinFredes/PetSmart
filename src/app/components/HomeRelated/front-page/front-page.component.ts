import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonButton, Animation } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { EmailComposerOptions } from '@awesome-cordova-plugins/email-composer';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent  implements OnInit {

  @ViewChildren(IonButton, {read: ElementRef})
  btn!: QueryList<ElementRef<HTMLIonButtonElement>>;

  private animation! : Animation;
  hasAccount: false;
  imageData: string;
  currentImage: string;

  constructor(private emailComposer:EmailComposer,
              private animationCtrl:AnimationController,
              public router:Router,
              public usuarios : UsuariosService,
              
            ) {}


  async captureImage(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    this.imageData = image.base64String;
    this.currentImage = `data:image/jpeg;base64,${image.base64String}`;
  }

  async sendMail(){
    const email: EmailComposerOptions = {
      to: 'sweetspam13@gmail.com',
      cc: 'sweetspam13@gmail.com',
      attachments: [`base64:image.jpg//${this.imageData}`],
      subject: 'fotoLocura',
      body: 'Todo lo que puede tener un cuerpo en un mail',
    };

    await this.emailComposer.open(email);

  }

  ngOnInit() {}

  async logoutUsuario(){
    this.usuarios.logoutUsuario();
    this.router.navigate(['plogin/login']);
  }

}
