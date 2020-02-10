import { Component, OnInit } from '@angular/core';
import { NgxMomoService } from './ngxmomo.service';

@Component({
  selector: 'momo-ngxmomo',
  template: `
    <p>
      ngxmomo works!
    </p>
  `,
  styles: []
})
export class NgxMomoComponent implements OnInit {

  constructor(private momo: NgxMomoService) { }

  ngOnInit() {
  }

}
