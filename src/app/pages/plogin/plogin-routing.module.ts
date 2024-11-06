import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PLoginPage } from './plogin.page';
import { LoginComponent } from 'src/app/components/LoginRelated/login/login.component';
import { PasswordForgotComponent } from 'src/app/components/LoginRelated/password-forgot/password-forgot.component';
import { PasswordResetComponent } from 'src/app/components/LoginRelated/password-reset/password-reset.component';
import { RegisterMailComponent } from 'src/app/components/LoginRelated/register-mail/register-mail.component';
import { RegisterNameComponent } from 'src/app/components/LoginRelated/register-name/register-name.component';

const routes: Routes = [
  {
    path: '',
    component: PLoginPage,
    //creo las rutas de los componentes en la pagina
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'password-forgot',
        component: PasswordForgotComponent
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent
      },
      {
        path: 'register-mail',
        component: RegisterMailComponent
      },
      {
        path: 'register-name',
        component: RegisterNameComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PLoginPageRoutingModule {}
