import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/class/usuario';
import { DBSService } from 'src/app/services/dbs.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register-mail',
  templateUrl: './register-mail.component.html',
  styleUrls: ['./register-mail.component.scss'],
})
export class RegisterMailComponent  implements OnInit {



  newUsuario: Usuario =  { id: '',nombre:'',contrasena:'', correo:''};

  formRegistro: FormGroup;

  constructor(public router:Router,
              public formBuilder: FormBuilder,
              public loadingControl : LoadingController,
              public usuarios : UsuariosService,
              public dbs : DBSService,
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




async registrarFireBase() {

  const loading = await this.loadingControl.create();
  if(this.formRegistro?.valid){
    const user = await this.usuarios.registrarUsuario(this.formRegistro.value.email,this.formRegistro.value.password)
    if(user){
      const uid =(await this.usuarios.obtenerUsuario()).uid
      this.newUsuario = {id: uid,
                         nombre: this.formRegistro.value.nombre,
                         contrasena: this.formRegistro.value.password,
                         correo: this.formRegistro.value.email
                        }
      this.dbs.crearDocID(this.newUsuario,'Usuarios',this.newUsuario.id)
      loading.dismiss()
      this.router.navigate(['home/front-page'])
    }else{
      console.log(this.newUsuario,user)
    }
  }

}


regresar(){
  this.router.navigate(['plogin/login']);
}




}
