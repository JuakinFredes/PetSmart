import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VerificarGuard } from './guard/verificar.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate : [VerificarGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home/front-page',
    pathMatch: 'full'
  },
  {
    path: 'plogin',
    loadChildren: () => import('./pages/plogin/plogin.module').then( m => m.PLoginPageModule)
  },
  {
  path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule),
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
