import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  nuevo:boolean = false;

  constructor( private _heroe:HeroesService,
               private router:Router,
               private activatedRoute: ActivatedRoute ) {


    this.activatedRoute.params.subscribe ( response => {
      if ( response.id == "nuevo" ) {
        this.nuevo = true;
      } else {
        this.nuevo = false;
        this.heroe.key = response['id'];
        this._heroe.getHeroe ( this.heroe ).subscribe ( response => {
          console.log (response);
          this.heroe = response;
        })
      }
    })
  }

  ngOnInit() {
  }


  guardar () {
    if ( this.nuevo ) {
      this._heroe.nuevoHeroe ( this.heroe ).subscribe ( response => {
        this.router.navigate (['/heroe',response.name]);
      });
    } else {
      this._heroe.actualizarHeroe ( this.heroe ).subscribe ( response => {
      });
    }
  }

  public agregarNuevo( forma:NgForm ) {
    this.router.navigate (['/heroe', 'nuevo']);

    forma.reset ( { casa:"Marvel"} );
  }




}
