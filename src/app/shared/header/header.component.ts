import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@Angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public _service: InfoPageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  buscarProducto(texto: string) {

    if (texto.length < 1)
      return;

    this.router.navigate(['/search', texto]);
    //console.log(texto);
  }
}
