import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

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

  constructor( private _heroe:HeroesService,
               private router:Router) { }

  ngOnInit() {
  }


  guardar () {
    this._heroe.nuevoHeroe ( this.heroe ).subscribe ( response => {
      console.log (response);
      this.router.navigate (['/heroe',response.name]);
    })
  }

}
