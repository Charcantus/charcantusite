import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-volante',
  templateUrl: './volante.component.html',
  styleUrls: ['./volante.component.css']
})
export class VolanteComponent implements OnInit {

  constructor() { }

  pokemonVolante: {name:string, image:string}[] = [
    {name: 'Charizard', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png'},
    {name: 'Pidgeot', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pidgeot.png'},
    {name: 'Gyarados', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gyarados.png'},
    {name: 'Dragonite', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragonite.png'},
    {name: 'Togekiss', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/togekiss.png'},
    {name: 'Salamence', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/salamence.png'},
    {name: 'Staraptor', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/staraptor.png'},
    {name: 'Braviary', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/braviary.png'},
    {name: 'Noivern', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/noivern.png'},
    {name: 'Aerodactyl', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/aerodactyl.png'},
    {name: 'Altaria', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/altaria.png'},
    {name: 'Rayquaza', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rayquaza.png'},
    {name: 'Swanna', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/swanna.png'},
    {name: 'Hawlucha', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hawlucha.png'},
    {name: 'Corviknight', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/corviknight.png'},
  ]
  squadraVolante: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('volante') === null){
      this.squadraVolante = this.pokemonVolante[Math.floor(Math.random() * this.pokemonVolante.length)];
      localStorage.setItem('volante', this.squadraVolante.name);
    }else{
      this.firstTime = false;
      let squadraVolanteName = localStorage.getItem('volante')!;
      for(let pokemon of this.pokemonVolante){
        if(pokemon.name === squadraVolanteName){
          this.squadraVolante = pokemon;
        }
      }
    }
  }

  protected readonly Router = Router;
}
