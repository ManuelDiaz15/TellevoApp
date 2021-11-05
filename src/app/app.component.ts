import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    var dato_registro ={
      nombre: 'Manu',
      contraseña: '123'
    }
    localStorage.setItem('dato_registro',JSON.stringify(dato_registro));
  }
}
