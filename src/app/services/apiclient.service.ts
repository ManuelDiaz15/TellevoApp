import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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
  apiURL = 'http://192.168.0.3:3000'

  constructor(private http: HttpClient) { }

  getCiudades(): Observable<any> {
    return this.http.get(this.apiURL + '/Ciudades/').pipe(
      retry(3)
    );
  }
  getCiudad(id): Observable<any> {
    return this.http.get(this.apiURL + '/Ciudad/' + id).pipe(
      retry(3)
    );
  }
  getDirecciones(): Observable<any> {
    return this.http.get(this.apiURL + '/Direcciones/').pipe(
      retry(3)
    );
  }
  getDireccion(id): Observable<any> {
    return this.http.get(this.apiURL + '/Direcciones/' + id).pipe(
      retry(3)
    );
  }
  createPost(post): Observable<any> {
    return this.http.post(this.apiURL + '/Direcciones', post, this.httpOptions).pipe(
        retry(3)
      );
  }
  updatePost(id, post): Observable<any> {
    return this.http.put(this.apiURL + '/Direcciones/' + id, post, this.httpOptions).pipe(
      retry(3));
  }
  deletePost(id):Observable<any>{
    return this.http.delete(this.apiURL+'/Direcciones/'+id,this.httpOptions);
    }

}
