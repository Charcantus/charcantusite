import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psico',
  templateUrl: './psico.component.html',
  styleUrls: ['./psico.component.css']
})
export class PsicoComponent implements OnInit {

  constructor() { }

  pokemonPsico: {name:string, image:string}[] = [
    {name: 'Mew', image: 'https://img.pokemondb.net/sprites/home/normal/mew.png'},
    {name: 'Alakazam', image: 'https://img.pokemondb.net/sprites/home/normal/alakazam.png'},
    {name: 'Gardevoir', image: 'https://img.pokemondb.net/sprites/home/normal/gardevoir.png'},
    {name: 'Espeon', image: 'https://img.pokemondb.net/sprites/home/normal/espeon.png'},
    {name: 'Hypno', image: 'https://img.pokemondb.net/sprites/home/normal/hypno.png'},
    {name: 'Metagross', image: 'https://img.pokemondb.net/sprites/home/normal/metagross.png'},
    {name: 'Slowbro', image: 'https://img.pokemondb.net/sprites/home/normal/slowbro.png'},
    {name: 'Starmie', image: 'https://img.pokemondb.net/sprites/home/normal/starmie.png'},
    {name: 'Jynx', image: 'https://img.pokemondb.net/sprites/home/normal/jynx.png'},
    {name: 'Espeon', image: 'https://img.pokemondb.net/sprites/home/normal/espeon.png'},
    {name: 'Gothitelle', image: 'https://img.pokemondb.net/sprites/home/normal/gothitelle.png'},
    {name: 'Reuniclus', image: 'https://img.pokemondb.net/sprites/home/normal/reuniclus.png'},
    {name: 'Malamar', image: 'https://img.pokemondb.net/sprites/home/normal/malamar.png'},
    {name: 'Sigilyph', image: 'https://img.pokemondb.net/sprites/home/normal/sigilyph.png'},
    {name: 'Musharna', image: 'https://img.pokemondb.net/sprites/home/normal/musharna.png'},
  ]
  squadraPsico: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('psico') === null){
      this.squadraPsico = this.pokemonPsico[Math.floor(Math.random() * this.pokemonPsico.length)];
      localStorage.setItem('psico', this.squadraPsico.name);
    }else{
      this.firstTime = false;
      let squadraPsicoName = localStorage.getItem('psico')!;
      for(let pokemon of this.pokemonPsico){
        if(pokemon.name === squadraPsicoName){
          this.squadraPsico = pokemon;
        }
      }
    }
  }
}
