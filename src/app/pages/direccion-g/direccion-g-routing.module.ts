import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionGPage } from './direccion-g.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionGPageRoutingModule {}
