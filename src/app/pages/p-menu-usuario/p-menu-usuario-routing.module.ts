import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMenuUsuarioPage } from './p-menu-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PMenuUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMenuUsuarioPageRoutingModule {}
