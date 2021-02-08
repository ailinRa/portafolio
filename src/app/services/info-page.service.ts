import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  ready = false;
  equipo: any;

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get("assets/data/data-pagina.json").
      subscribe((resp: InfoPagina) => {
        this.info = resp;
        this.ready = true;
        //console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http.get("https://portafolio-angular-49141-default-rtdb.firebaseio.com/equipo.json").
      subscribe((resp: any[]) => {
        this.equipo = resp;
        this.ready = true;
        //console.log(resp);
      });
  }
}