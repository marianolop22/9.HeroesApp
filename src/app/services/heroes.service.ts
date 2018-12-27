import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url:string = "https://heroesapp-d2555.firebaseio.com/heroes.json";
  heroeUrl:string = "https://heroesapp-d2555.firebaseio.com/heroes";

  constructor( private http:HttpClient ) {  }

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


  actualizarHeroe ( heroe:Heroe ): Observable<any> {

    let body = JSON.stringify (heroe);
    let headers:HttpHeaders = new HttpHeaders ( {
      'Content-Type':'application/json'
    })

    let url=`${this.heroeUrl}/${heroe.key}.json`
    return this.http.put (url, body, { headers } ).pipe ();
  }

  getHeroe ( heroe:Heroe ): Observable<any> {

    let headers:HttpHeaders = new HttpHeaders ( {
      'Content-Type':'application/json'
    })

    let url=`${this.heroeUrl}/${heroe.key}.json`
    return this.http.get (url, { headers } ).pipe ();
  }


  getHeroes (): Observable<any> {

    let headers:HttpHeaders = new HttpHeaders ( {
      'Content-Type':'application/json'
    })

    return this.http.get (this.url, { headers } ).pipe ();
  }

  borrarHeroe ( k:string ): Observable<any> {

    let headers:HttpHeaders = new HttpHeaders ( {
      'Content-Type':'application/json'
    })

    let url=`${ this.heroeUrl }/${ k }.json`
    return this.http.delete (url, { headers } ).pipe ();
  }










}
