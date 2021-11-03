import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMenuUsuarioPageRoutingModule } from './p-menu-usuario-routing.module';

import { PMenuUsuarioPage } from './p-menu-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMenuUsuarioPageRoutingModule
  ],
  declarations: [PMenuUsuarioPage]
})
export class PMenuUsuarioPageModule {}
