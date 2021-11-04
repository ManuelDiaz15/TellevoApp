import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  usuario:String; 
  password:String; 
  ngOnInit(){}
   // Se utiliza el API enrrutador (Router)  importandolo como (" private router: Router ") para la navegación entre paginas 
   // NavigationExtras para enviar un parametro a otra pagina
  constructor(private router: Router, private alertController: AlertController, private animationCtrl: AnimationController) {}
  //Metodo para navegar a Recuperar Password
  recuperar_password(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/p-recuperar-password'],navigationExtras);//Define la ruta donde llegara
  }
  //Metodo para navegar a Menu Usuario
  siguiente(){
    let navigationExtras: NavigationExtras={
     state:{usuario: this.usuario}// (Creamos el parametro o los parametros que queremos enviar en este caso this.usuario)
    }
    //this.usuario!=null || this.password!=null
    if (this.usuario == 'Manu' && this.password == '123' || this.usuario == 'Lloni' && this.password == '123'){
      this.router.navigate(['/p-menu-usuario'],navigationExtras);//Envia el parametro a la siguiente pag para ser utilizado
    }else{
     this.presentAlert("Te LLevoAPP","Usuario o contraseña Inválido")
    }
  }
  async presentAlert(Titulo:string, msg:string) {
    const alert = await this.alertController.create({
      header: Titulo,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }  
  @ViewChild('titulo',{read: ElementRef, static:true}) titulo: ElementRef;
  @ViewChild('titulo1',{read: ElementRef, static:true}) titulo1: ElementRef;

ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .addElement(this.titulo1.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.1)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);
    animation.play();
  }
}