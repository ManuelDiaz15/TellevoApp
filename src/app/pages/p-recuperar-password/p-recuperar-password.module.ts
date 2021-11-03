import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PRecuperarPasswordPageRoutingModule } from './p-recuperar-password-routing.module';
import { PRecuperarPasswordPage } from './p-recuperar-password.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PRecuperarPasswordPageRoutingModule,
  ],
  declarations: [PRecuperarPasswordPage]
})
export class PRecuperarPasswordPageModule {}
