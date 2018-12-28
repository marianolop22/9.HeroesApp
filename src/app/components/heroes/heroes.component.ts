import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  loading:boolean = true;


  constructor( private _heroes:HeroesService ) {

    this._heroes.getHeroes ().subscribe (response => {
      console.log (response);

      this.heroes = response;

    }).add ( ()=> {this.loading = false;})


  }

  ngOnInit() {
  }

  public eliminarHeroe (k) {
    this._heroes.borrarHeroe (k).subscribe (response => {
      console.log (response);
      console.log (this.heroes[k]);
      delete this.heroes[k];
    })
  }


}
