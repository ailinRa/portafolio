import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@Angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
    public productoServive: ProductosService) {
  }

  ngOnInit(): void {
    //Me suscribo al route para recivir las novedades de los parametros
    this.route.params
      .subscribe(parametros => {
        //console.log(parametros['id']);
        this.productoServive.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            console.log(producto);
            this.producto = producto;
          })
      });
  }

}
