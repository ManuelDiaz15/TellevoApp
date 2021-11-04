import { Component, OnInit } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-direccion-g',
  templateUrl: './direccion-g.page.html',
  styleUrls: ['./direccion-g.page.scss'],
})
export class DireccionGPage implements OnInit {

  direccion:string;
  nro:string;
  constructor(public bdlocalservice: BdLocalService) {}
  guardar(){
    this.bdlocalservice.guardarDireccion(this.direccion,this.nro)
  }
  
  ngOnInit() {
  }
}



