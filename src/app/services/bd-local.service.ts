import { Injectable, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IDireccion } from '../interfaces/idireccion';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  direccion:IDireccion[]=[];

  private _storage: Storage | null = null;
  
  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init();
    //Cargo contenido de localStorage a Direccion
    this.cargarDireccion();

  }
  async cargarDireccion() {
    const miDireccion= await this.storage.get('direccion');
    if (miDireccion) {
        this.direccion=miDireccion;
    }
  }
  guardarDireccion (strDireccion:string, nro:string){
    //Creo consluta para saber si la dirección ingresada no existia 
    const existe= this.direccion.find(c=>c.strNumero===nro);
    if (!existe) {
      this.direccion.unshift({strDireccion:strDireccion,strNumero:nro})
      this._storage.set('direccion',this.direccion)

      this.presentToast("Dirección agregada")
    } else {
      this.presentToast("Dirección ya existe")
    }
  }


  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    
  }
  async presentToast(mensaje:string) {

    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
}
