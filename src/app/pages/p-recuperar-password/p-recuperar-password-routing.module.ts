import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PRecuperarPasswordPage } from './p-recuperar-password.page';

const routes: Routes = [
  {
    path: '',
    component: PRecuperarPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PRecuperarPasswordPageRoutingModule {}
