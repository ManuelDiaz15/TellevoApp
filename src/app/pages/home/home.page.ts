import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  formularioLogin: FormGroup;
  dato: String;
  ngOnInit(){}
   // Se utiliza el API enrrutador (Router)  importandolo como (" private router: Router ") para la navegación entre paginas 
   // NavigationExtras para enviar un parametro a otra pagina
  constructor(public fb: FormBuilder,private router: Router, public alerta: AlertController,
    public navCtrl: NavController, public ToastController: ToastController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    });
  }
  //Metodo para navegar a Recuperar Password
  recuperar_password(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/p-recuperar-password'],navigationExtras);//Define la ruta donde llegara
  }
  //Metodo para navegar a Menu Usuario
  async siguiente() {
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario.nombre == f.nombre && usuario.contraseña == f.contraseña) {
      const toast = await this.ToastController.create({
        message:'¡Bienvenido '+this.dato+'!',
        position:'top',
        duration:2000
      });
      toast.present();
      console.log('ingresado');
      localStorage.setItem('ingresado', 'true');
      let navigationExtras: NavigationExtras = {
      };
      this.navCtrl.navigateRoot('p-menu-usuario');
    } else {
      const alert = await this.alerta.create({
        header: 'Datos incorrectos',
        message: 'Los datos son incorrectos.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}