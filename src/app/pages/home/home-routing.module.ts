import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import { AgendaComponent } from 'src/app/components/HomeRelated/agenda/agenda.component';
import { AlarmasComponent } from 'src/app/components/HomeRelated/alarmas/alarmas.component';
import { CalendarioComponent } from 'src/app/components/HomeRelated/calendario/calendario.component';
import { CrearPetComponent } from 'src/app/components/HomeRelated/crear-pet/crear-pet.component';
import { FrontPageComponent } from 'src/app/components/HomeRelated/front-page/front-page.component';
import { PerfilMascoComponent } from 'src/app/components/HomeRelated/perfil-masco/perfil-masco.component';
import { PetsComponent } from 'src/app/components/HomeRelated/pets/pets.component';
import { PerfilUComponent } from 'src/app/components/HomeRelated/perfil-u/perfil-u.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    //creo las rutas de los componentes en la pagina
    children: [
      {
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'alarmas',
        component: AlarmasComponent
      },
      {
        path: 'calendario',
        component: CalendarioComponent
      },
      {
        path: 'crear-pet',
        component: CrearPetComponent
      },
      {
        path: 'front-page',
        component: FrontPageComponent
      },
      {
        path: 'perfilmasco',
        component: PerfilMascoComponent
      },
      {
        path: 'pets',
        component: PetsComponent
      },
      {
        path: 'perfil-u',
        component: PerfilUComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
