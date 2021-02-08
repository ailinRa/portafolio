import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    //Promesa de los datos, para evitar que se consuman antes de tiempo
    return new Promise<void>((resolve, reject) => {

      this.http.get("https://portafolio-angular-49141-default-rtdb.firebaseio.com/productos_idx.json").
        subscribe((resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          //console.log(resp);
        });
        //Indico cuando termino
        resolve();
    });

  }

  getProducto(id: string) {
    return this.http.get(`https://portafolio-angular-49141-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProductos(texto: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        //Se ejecuta despuede de obtener los productos
        this.filtrarProductos(texto);
      });
    }
    else {
      this.filtrarProductos(texto);
    }
  }

  private filtrarProductos(texto: string) {
    this.productosFiltrados = [];

    texto = texto.toLocaleLowerCase()

    this.productos.forEach(prod => {
      if (prod.categoria.toLocaleLowerCase().indexOf(texto) >= 0 ||
        prod.titulo.toLocaleLowerCase().indexOf(texto) >= 0 ) {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
