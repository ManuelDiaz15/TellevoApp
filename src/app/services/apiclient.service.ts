import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // Se establece la base url del API a consumir
 // apiURL = 'https://jsonplaceholder.typicode.com';
 apiURL = 'http://192.168.0.3:30000'

  constructor() { }
}
