import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
 
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' :'*'
  })
  }


  constructor() { }
}
