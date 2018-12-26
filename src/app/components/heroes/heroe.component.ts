import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {


  public heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }



  constructor() { }

  ngOnInit() {
  }


  guardar () {
    console.log (this.heroe);
  }

}
