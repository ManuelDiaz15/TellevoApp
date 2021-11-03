import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-p-menu-usuario',
  templateUrl: './p-menu-usuario.page.html',
  styleUrls: ['./p-menu-usuario.page.scss'],
})


export class PMenuUsuarioPage implements OnInit {
  usuario:String

  // Para rescatar el parametro que viene de home.page.ts tenemos que importar el ActivatedRoute y Route
  constructor(private activeroute: ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(params=>{  //Utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){ // Con este If verificamos que el NavigationExtras trae un paramentro y si es lo trae lo vamos a obtener con extras.state.usuario;
        this.usuario=this.router.getCurrentNavigation().extras.state.usuario; // extras.state.usuario (El usuario viene de home.page.ts state:{usuario: this.usuario})
      }
    });
   }


  ngOnInit() {
  }

}
