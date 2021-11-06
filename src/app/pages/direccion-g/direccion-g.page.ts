import { Component, OnInit } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { APIClientService } from 'src/app/services/apiclient.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-direccion-g',
  templateUrl: './direccion-g.page.html',
  styleUrls: ['./direccion-g.page.scss'],
})
export class DireccionGPage{

  dato:any;
  Ciudades:any;
  Direcciones:any;
  Direccion:any;
  post:any={
    id: null,
    titulo:" ",
    mensaje:" "
  };
  constructor(private router:Router, public alertController: AlertController, public navCtrl: NavController, private api:APIClientService) {}
    ionViewWillEnter() {
      this.getCiudades();
    }
    getCiudades() {
      this.api.getCiudades().subscribe((dato) => {
        this.Ciudades = dato;
      });
    }
    getDirecciones() {
      this.api.getDirecciones().subscribe((dato) => {
        this.Direcciones = dato;
        this.Direcciones.reverse();
      });
    }


}



