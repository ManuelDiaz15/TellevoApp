import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-p-recuperar-password',
  templateUrl: './p-recuperar-password.page.html',
  styleUrls: ['./p-recuperar-password.page.scss'],
  
})
export class PRecuperarPasswordPage implements OnInit {
  datocorreo: String

  // Para rescatar el parametro que viene de home.page.ts tenemos que importar el Route
  constructor(private router:Router,public toastController: ToastController, public alertController: AlertController) {
   }
   //Boton para restablecer contraseña a su vez envia mensaje a traves del Toast
   restablecer(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/home'],navigationExtras);
    this.presentToast();
  }
  ngOnInit() {
  }
  
  async presentToast() {
    if(this.datocorreo == null)
    {
      const toast = await this.toastController.create({message: 'Correo Inválido.', position: 'bottom', duration: 2000});
      await toast.present();
      this.router.navigate(['/p-recuperar-password']);
    } else {
      const alert = await this.alertController.create({backdropDismiss: false, message: 'Correo enviado con éxito a '+ this.datocorreo +" para restablecer tu contraseña", buttons: [{text: 'Aceptar', handler: () => { this.router.navigate(['/home']);}}]});
      await alert.present();
    }
  }
  
}

