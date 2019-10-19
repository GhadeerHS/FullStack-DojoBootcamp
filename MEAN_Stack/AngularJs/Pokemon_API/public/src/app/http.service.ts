import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getBulbasaur();

  }
  getBulbasaur(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      var Abilities = data['abilities'];
      var Url;
      for (let a in Abilities) {
        console.log('Ability: ' + Abilities[a].ability.name);
        Url = Abilities[a].ability.url;
        var pokemonsInfo = this._http.get(Url);
        pokemonsInfo.subscribe(data => {
          var pokemons = data['pokemon'];
          console.log('There are ' + pokemons.length + ' pokemons with the same ability');
        });
      }
    });

  }
}
