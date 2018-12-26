import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url:string="https://heroesapp-d2555.firebaseio.com/heroes.json";



  constructor( private http:HttpClient ) { }

  nuevoHeroe ( heroe:Heroe ): Observable<any> {

    let body = JSON.stringify (heroe);
    let headers:HttpHeaders = new HttpHeaders ( {
      'Content-Type':'application/json'
    })

    //, observe:'response'

    return this.http.post (this.url, body, { headers } ).pipe (
      // map( response => {
      //   console.log (response);
      //   return response;
      // } )
    );


  }


}
