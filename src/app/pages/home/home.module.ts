import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AgendaComponent } from 'src/app/components/HomeRelated/agenda/agenda.component';
import { AlarmasComponent } from 'src/app/components/HomeRelated/alarmas/alarmas.component';
import { CalendarioComponent } from 'src/app/components/HomeRelated/calendario/calendario.component';
import { CrearPetComponent } from 'src/app/components/HomeRelated/crear-pet/crear-pet.component';
import { FrontPageComponent } from 'src/app/components/HomeRelated/front-page/front-page.component';

import { PetsComponent } from 'src/app/components/HomeRelated/pets/pets.component';
import { PerfilMascoComponent } from 'src/app/components/HomeRelated/perfil-masco/perfil-masco.component';
import { PerfilUComponent } from 'src/app/components/HomeRelated/perfil-u/perfil-u.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //declaracion de los componentes que se usaran en la pagina
  declarations: [HomePage,
                 AgendaComponent,
                 AlarmasComponent,
                 CalendarioComponent,
                 CrearPetComponent,
                 FrontPageComponent,
                 PerfilMascoComponent,
                 PetsComponent,
                 PerfilUComponent
                ]
})
export class HomePageModule {}
