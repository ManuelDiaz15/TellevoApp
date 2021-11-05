import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AnimationController } from '@ionic/angular';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  formularioLogin: FormGroup;
  dato_registro: String;
  ngOnInit() { }
  // Se utiliza el API enrrutador (Router)  importandolo como (" private router: Router ") para la navegación entre paginas 
  // NavigationExtras para enviar un parametro a otra pagina
  constructor(public fb: FormBuilder, private router: Router, public alerta: AlertController, public navCtrl: NavController, public ToastController: ToastController,  private animationCtrl: AnimationController) {
    this.formularioLogin = this.fb.group({'nombre': new FormControl("", Validators.required),'contraseña': new FormControl("", Validators.required)});
  }
  //Metodo para navegar a Recuperar Password
  recuperar_password() {
    let navigationExtras: NavigationExtras = {
    }
    this.router.navigate(['/p-recuperar-password'], navigationExtras);//Define la ruta donde llegara
  }
  @ViewChild('titulo',{read: ElementRef, static:true}) titulo: ElementRef;
  @ViewChild('titulo1',{read: ElementRef, static:true}) titulo1: ElementRef;
  @ViewChild('titulo2',{read: ElementRef, static:true}) titulo2: ElementRef;

ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .addElement(this.titulo1.nativeElement)
      .addElement(this.titulo2.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.1)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);
    animation.play();
  }
  async siguiente() {
    var form = this.formularioLogin.value;
    var dato_registro = JSON.parse(localStorage.getItem('dato_registro'));
    if (dato_registro.nombre == form.nombre && dato_registro.contraseña == form.contraseña) {
      const toast = await this.ToastController.create({
        message: '¡Bienvenido ' + this.dato_registro + '!',
        position: 'top',
        duration: 2000
      });
      toast.present();
      localStorage.setItem('ingresado', 'true');
      let navigationExtras: NavigationExtras = {
      };
      this.navCtrl.navigateRoot('p-menu-usuario');
    } else {
      const alert = await this.alerta.create({
        header: 'Datos Erroneos',
        message: 'Los datos no son validos.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }



}