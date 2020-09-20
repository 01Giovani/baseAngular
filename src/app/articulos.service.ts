import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http:HttpClient) { }

  url='http://localhost:81/guia4/';

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
    }
    alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
    }
    baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
    }
    seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
    }
    modificacion(articulo) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
    }
}
