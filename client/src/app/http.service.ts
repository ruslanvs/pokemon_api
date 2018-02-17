console.log( "******** http.service.ts ********" );

import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"

@Injectable()
export class HttpService {
constructor( private _http: HttpClient ) {
    this.get_bulbasaur();
    // this.get_bulba();
  }
  get_bulbasaur(){
    let bulbasaur = this._http.get( "http://pokeapi.co/api/v2/pokemon/1/");
    bulbasaur.subscribe( data => {
      console.log( "Got our pokemon:", data )
      let abilities = data["abilities"];
      for( let i in abilities ){
        console.log( abilities[i].ability.name );
      }
    });
  };

  // get_bulba(){ // played with filtering queries quite a bit, but none of them worked with pokeapi.co
  //   let bulba = this._http.get( "http://pokeapi.co/api/v2/pokemon?q=name:bulba");
  //   bulba.subscribe( data => {
  //     console.log( "Got data:", data );
  //   });
  // };


}
