import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register-mail',
  templateUrl: './register-mail.component.html',
  styleUrls: ['./register-mail.component.scss'],
})
export class RegisterMailComponent  implements OnInit {

  nombre : string ="";
  contrasena : string = "";
  correo : string = "";

  formRegistro: FormGroup;

  constructor(public router:Router,
              public formBuilder: FormBuilder,
              public loadingControl : LoadingController,
              public usuarios : UsuariosService,
  ) { }

  usuario: any[] = [];

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      email : ['', [Validators.required,
                    Validators.email
      ]],
      password : ['', [Validators.required,
                       Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]],
    })
  }

  get errorControl(){ 
    return this.formRegistro?.controls;
}


async registarFireBase() {

  const loading = await this.loadingControl.create();
  if(this.formRegistro?.valid){
    const user = await this.usuarios.registrarUsuario(this.formRegistro.value.email,this.formRegistro.value.password)
    if(user){
      loading.dismiss()
      this.router.navigate(['home/front-page'])
    }
  }

}


regresar(){
  this.router.navigate(['plogin/login']);
}



}
