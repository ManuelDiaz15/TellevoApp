import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionGPageRoutingModule } from './direccion-g-routing.module';

import { DireccionGPage } from './direccion-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionGPageRoutingModule
  ],
  declarations: [DireccionGPage]
})
export class DireccionGPageModule {}
