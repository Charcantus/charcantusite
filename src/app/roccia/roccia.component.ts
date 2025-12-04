import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roccia',
  templateUrl: './roccia.component.html',
  styleUrls: ['./roccia.component.css']
})
export class RocciaComponent implements OnInit {
  constructor() { }

  pokemonRoccia: {name:string, image:string}[] = [
    {name: 'Golem', image: 'https://img.pokemondb.net/sprites/home/normal/golem.png'},
    {name: 'Onix', image: 'https://img.pokemondb.net/sprites/home/normal/onix.png'},
    {name: 'Rhyhorn', image: 'https://img.pokemondb.net/sprites/home/normal/rhyhorn.png'},
    {name: 'Geodude', image: 'https://img.pokemondb.net/sprites/home/normal/geodude.png'},
    {name: 'Sudowoodo', image: 'https://img.pokemondb.net/sprites/home/normal/sudowoodo.png'},
    {name: 'Larvitar', image: 'https://img.pokemondb.net/sprites/home/normal/larvitar.png'},
    {name: 'Tyranitar', image: 'https://img.pokemondb.net/sprites/home/normal/tyranitar.png'},
    {name: 'Nosepass', image: 'https://img.pokemondb.net/sprites/home/normal/nosepass.png'},
    {name: 'Cranidos', image: 'https://img.pokemondb.net/sprites/home/normal/cranidos.png'},
    {name: 'Shieldon', image: 'https://img.pokemondb.net/sprites/home/normal/shieldon.png'},
    {name: 'Boldore', image: 'https://img.pokemondb.net/sprites/home/normal/boldore.png'},
    {name: 'Gigalith', image: 'https://img.pokemondb.net/sprites/home/normal/gigalith.png'},
    {name: 'Roggenrola', image: 'https://img.pokemondb.net/sprites/home/normal/roggenrola.png'},
    {name: 'Carracosta', image: 'https://img.pokemondb.net/sprites/home/normal/carracosta.png'},
    {name: 'Tirtouga', image: 'https://img.pokemondb.net/sprites/home/normal/tirtouga.png'},
  ]
  squadraRoccia: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('roccia') === null){
      this.squadraRoccia = this.pokemonRoccia[Math.floor(Math.random() * this.pokemonRoccia.length)];
      localStorage.setItem('roccia', this.squadraRoccia.name);
    }else{
      this.firstTime = false;
      let squadraRocciaName = localStorage.getItem('roccia')!;
      for(let pokemon of this.pokemonRoccia){
        if(pokemon.name === squadraRocciaName){
          this.squadraRoccia = pokemon;
        }
      }
    }
  }
}
