import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year: number;

  constructor(public _service: InfoPageService) {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
