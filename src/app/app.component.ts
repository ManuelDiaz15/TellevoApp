import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    var usuario ={
      nombre: 'manu',
      contraseña: '12345'
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
