import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erba',
  templateUrl: './erba.component.html',
  styleUrls: ['./erba.component.css']
})
export class ErbaComponent implements OnInit {
  constructor() { }

  pokemonErba: {name:string, image:string}[] = [
    {name: 'Bulbasaur', image: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png'},
    {name: 'Oddish', image: 'https://img.pokemondb.net/sprites/home/normal/oddish.png'},
    {name: 'Bellsprout', image: 'https://img.pokemondb.net/sprites/home/normal/bellsprout.png'},
    {name: 'Exeggcute', image: 'https://img.pokemondb.net/sprites/home/normal/exeggcute.png'},
    {name: 'Tangela', image: 'https://img.pokemondb.net/sprites/home/normal/tangela.png'},
    {name: 'Chikorita', image: 'https://img.pokemondb.net/sprites/home/normal/chikorita.png'},
    {name: 'Treecko', image: 'https://img.pokemondb.net/sprites/home/normal/treecko.png'},
    {name: 'Turtwig', image: 'https://img.pokemondb.net/sprites/home/normal/turtwig.png'},
    {name: 'Snivy', image: 'https://img.pokemondb.net/sprites/home/normal/snivy.png'},
    {name: 'Chespin', image: 'https://img.pokemondb.net/sprites/home/normal/chespin.png'},
    {name: 'Rowlet', image: 'https://img.pokemondb.net/sprites/home/normal/rowlet.png'},
    {name: 'Grookey', image: 'https://img.pokemondb.net/sprites/home/normal/grookey.png'},
    {name: 'Sprigatito', image: 'https://img.pokemondb.net/sprites/home/normal/sprigatito.png'},
    {name: 'Leafeon', image: 'https://img.pokemondb.net/sprites/home/normal/leafeon.png'},
    {name: 'Sceptile', image: 'https://img.pokemondb.net/sprites/home/normal/sceptile.png'},
  ]
  squadraErba: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('erba') === null){
      this.squadraErba = this.pokemonErba[Math.floor(Math.random() * this.pokemonErba.length)];
      localStorage.setItem('erba', this.squadraErba.name);
    }else{
      this.firstTime = false;
      let squadraErbaName = localStorage.getItem('erba')!;
      for(let pokemon of this.pokemonErba){
        if(pokemon.name === squadraErbaName){
          this.squadraErba = pokemon;
        }
      }
    }
  }
}
