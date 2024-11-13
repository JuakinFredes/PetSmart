import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonButton, Animation } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent  implements OnInit {

  @ViewChildren(IonButton, {read: ElementRef})
  btn!: QueryList<ElementRef<HTMLIonButtonElement>>;

  private animation! : Animation;

  constructor(private animationCtrl:AnimationController,
              public router:Router,
              public usuarios : UsuariosService) { }

  ngOnInit() {}
  ngAfterViewInit(){
    const salir = this.animationCtrl
    .create()
    .addElement(this.btn.get(0)!.nativeElement)
    .fromTo('opacity', '0.2', '1');;

    this.animation=this.animationCtrl
    .create()
    .duration(3000)
    .iterations(1)
    .addAnimation([salir]);

    this.animation.play();
  }
  async logoutUsuario(){
    this.usuarios.logoutUsuario();
    this.router.navigate(['plogin/login']);
  }

}
