import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elettro',
  templateUrl: './elettro.component.html',
  styleUrls: ['./elettro.component.css']
})
export class ElettroComponent implements OnInit {
  constructor() { }

  pokemonElettro: {name:string, image:string}[] = [
    {name: 'Electrode', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/electrode.png'},
    {name: 'Pikachu', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png'},
    {name: 'Jolteon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/jolteon.png'},
    {name: 'Zapdos', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zapdos.png'},
    {name: 'Raichu', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png'},
    {name: 'Ampharos', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/ampharos.png'},
    {name: 'Magnezone', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/magnezone.png'},
    {name: 'Electivire', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/electivire.png'},
    {name: 'Rotom', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rotom.png'},
    {name: 'Zeraora', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zeraora.png'},
    {name: 'Togedemaru', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/togedemaru.png'},
    {name: 'Xurkitree', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/xurkitree.png'},
    {name: 'Eelektross', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/eelektross.png'},
    {name: 'Galvantula', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/galvantula.png'},
    {name: 'Luxray', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/luxray.png'},
  ]
  squadraElettro: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('elettro') === null){
      this.squadraElettro = this.pokemonElettro[Math.floor(Math.random() * this.pokemonElettro.length)];
      localStorage.setItem('elettro', this.squadraElettro.name);
    }else{
      this.firstTime = false;
      let squadraElettroName = localStorage.getItem('elettro')!;
      for(let pokemon of this.pokemonElettro){
        if(pokemon.name === squadraElettroName){
          this.squadraElettro = pokemon;
        }
      }
    }
  }
}
