import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
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
    loadChildren: () => import('./pages/p-menu-usuario/p-menu-usuario.module').then( m => m.PMenuUsuarioPageModule)
  },
  {
    path: 'direccion-g',
    loadChildren: () => import('./pages/direccion-g/direccion-g.module').then( m => m.DireccionGPageModule)
  },
  {
    path: 'not-found',
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
