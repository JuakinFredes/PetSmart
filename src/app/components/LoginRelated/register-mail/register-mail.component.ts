import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
  /** 
  const loading = await this.loadingControl.create();
  if(this.formRegistro?.valid){
    const user = await this.autentificacion.registrarUsuario(this.formRegistro.value.email,this.formRegistro.value.password)
    if(user){
      loading.dismiss()
      this.registrar()
      this.router.navigate(['/home'])
    }
  }
    */
}



ingresar(){
  this.router.navigate(['/home']);
}

regresar(){
  this.router.navigate(['/login']);
}



}
