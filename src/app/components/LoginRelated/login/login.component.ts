import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, LoadingController  } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {


  login:any={
    email:"",
    password:"" 
  }
 
  contrasena : string = "";
  correo : string = "";
 
  field:string="";
 
  formLogin: FormGroup;

  constructor(public router:Router, 
              public toastController:ToastController,
              public formBuilder: FormBuilder,
              public loadingControl : LoadingController,
              public usuarios : UsuariosService,  
            ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email : ['', [Validators.required,
                    Validators.email
      ]],
      password : ['', [Validators.required,
                       Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]],
    });
  }

  get errorControl(){ 
    return this.formLogin?.controls;
  }

  

  async loginUsuario() {
    const loading = await this.loadingControl.create();
    if(this.formLogin?.valid){
      const user = await this.usuarios.loginUsuario(this.formLogin.value.email,this.formLogin.value.password)
      if(user){
        loading.dismiss()
        this.router.navigate(['home/front-page'])
        }
      }
    }
  
    irRegistro(){
      this.router.navigate(['plogin/register-mail']);
    }
  
  
    validateModel(model:any){
      for(var [key,value] of Object.entries(model)){
        if(value == ""){
          this.field = key;
          return false;
        }
      }
      return true;
    }
  
    async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
      const toast = await this.toastController.create({
        message: msg,
        duration: duration?duration:2500,
        position: position,
      });
  
      await toast.present();
    }
    
  passwordForgot() {
    this.router.navigate(['plogin/password-forgot'])
  }
}
