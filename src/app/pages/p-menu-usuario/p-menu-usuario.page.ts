import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { GooglemapsComponent } from '../../googlemaps/googlemaps.component';

@Component({
  selector: 'app-p-menu-usuario',
  templateUrl: './p-menu-usuario.page.html',
  styleUrls: ['./p-menu-usuario.page.scss'],
})


export class PMenuUsuarioPage implements OnInit {
  usuario:String

  // Para rescatar el parametro que viene de home.page.ts tenemos que importar el ActivatedRoute y Route
  constructor(private activeroute: ActivatedRoute,
     private router:Router, 
     public alertController: AlertController, 
     public navCtrl: NavController,
     private modalController: ModalController) {

    this.activeroute.queryParams.subscribe(params=>{  //Utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){ // Con este If verificamos que el NavigationExtras trae un paramentro y si es lo trae lo vamos a obtener con extras.state.usuario;
        this.usuario=this.router.getCurrentNavigation().extras.state.usuario; // extras.state.usuario (El usuario viene de home.page.ts state:{usuario: this.usuario})
      }
    });
   }


  ngOnInit() {
  }

  
  nuevodestino(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/direccion-g']);//Define la ruta donde llegara
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Seguro que quieres salir?',
      buttons: [{ text: 'No',handler: () => {}}, 
      { text: 'Si',handler: () => {
      localStorage.removeItem('ingresado');
      this.navCtrl.navigateRoot('home');
          }
        }
      ]
    });

    await alert.present();

  }

  async addDirection() {

    const ubicacion = null;
    let positionInput = {  
      lat: -33.0336892,
      lng: -71.5331841
    };
    if (ubicacion !== null) {
        positionInput = ubicacion; 
    }

    const modalAdd  = await this.modalController.create({
      component: GooglemapsComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {position: positionInput}
    });
    await modalAdd.present();

    const {data} = await modalAdd.onWillDismiss();
    if (data) {
      console.log('data -> ', data);
      // this.cliente.ubicacion = data.pos;
      // console.log('this.cliente -> ', this.cliente);
    }

  }

}
