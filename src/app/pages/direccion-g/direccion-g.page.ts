import { Component, OnInit } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-direccion-g',
  templateUrl: './direccion-g.page.html',
  styleUrls: ['./direccion-g.page.scss'],
})
export class DireccionGPage implements OnInit {


  constructor(public bdlocalservice: BdLocalService) {}
  
  
  ngOnInit() {
  }
}



