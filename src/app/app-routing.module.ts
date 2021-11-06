import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'p-recuperar-password',
    loadChildren: () => import('./pages/p-recuperar-password/p-recuperar-password.module').then( m => m.PRecuperarPasswordPageModule)
  },
  {
    path: 'p-menu-usuario',
    loadChildren: () => import('./pages/p-menu-usuario/p-menu-usuario.module').then( m => m.PMenuUsuarioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'direccion-g',
    loadChildren: () => import('./pages/direccion-g/direccion-g.module').then( m => m.DireccionGPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
