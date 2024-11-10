import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PLoginPageRoutingModule } from './plogin-routing.module';

import { PLoginPage } from './plogin.page';
import { LoginComponent } from 'src/app/components/LoginRelated/login/login.component';
import { PasswordForgotComponent } from 'src/app/components/LoginRelated/password-forgot/password-forgot.component';
import { PasswordResetComponent } from 'src/app/components/LoginRelated/password-reset/password-reset.component';
import { RegisterMailComponent } from 'src/app/components/LoginRelated/register-mail/register-mail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PLoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //declaracion de los componentes que se usaran en la pagina
  declarations: [PLoginPage,
                 LoginComponent,
                 PasswordForgotComponent,
                 PasswordResetComponent,
                 RegisterMailComponent,
                 ]
})
export class PLoginPageModule {}
