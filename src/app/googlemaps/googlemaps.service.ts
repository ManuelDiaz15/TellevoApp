// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GooglemapsService {

//   constructor() { }
// }

import { Injectable} from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  // AIzLSyCzwRcOLLgw9xfAaIt11HD523Q69g62J3Z

  apiKey = 'AIzaSyBMKthU7uMuzEjLux8K_BstNcViLUET0DY';
  mapsLoaded = false;


  constructor() {}

  init(renderer: any, document: any): Promise<any> {

    return new Promise((resolve) => {

      if (this.mapsLoaded) {
        console.log('google se carga en previamente')
        resolve(true);
        return;
      }

      const script = renderer.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
          this.mapsLoaded = true;
          if (google) {
             console.log('google está cargado')
          } else {
             console.log('google no está definido')
          }
          resolve(true);
          return;
      }

      if(this.apiKey){
          script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
          script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';       
      }

      renderer.appendChild(document.body, script);

    });

  
  }


}


