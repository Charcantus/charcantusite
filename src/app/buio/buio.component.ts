import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buio',
  templateUrl: './buio.component.html',
  styleUrls: ['./buio.component.css']
})
export class BuioComponent implements OnInit {
  constructor() { }

  pokemonBuio: {name:string, image:string}[] = [
    {name: 'Umbreon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/umbreon.png'},
    {name: 'Sableye', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sableye.png'},
    {name: 'Murkrow', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/murkrow.png'},
    {name: 'Spiritomb', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/spiritomb.png'},
    {name: 'Honchkrow', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/honchkrow.png'},
    {name: 'Darkrai', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/darkrai.png'},
    {name: 'Yveltal', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/yveltal.png'},
    {name: 'Zoroark', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zoroark.png'},
    {name: 'Cacturne', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cacturne.png'},
    {name: 'Weavile', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/weavile.png'},
    {name: 'Tyranitar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tyranitar.png'},
    {name: 'Greninja', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/greninja.png'},
    {name: 'Bisharp', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bisharp.png'},
    {name: 'Hydreigon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hydreigon.png'},
    {name: 'Yamask', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/yamask.png'},
  ]
  squadraBuio: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('buio') === null){
      this.squadraBuio = this.pokemonBuio[Math.floor(Math.random() * this.pokemonBuio.length)];
      localStorage.setItem('buio', this.squadraBuio.name);
    }else{
      this.firstTime = false;
      let squadraBuioName = localStorage.getItem('buio')!;
      for(let pokemon of this.pokemonBuio){
        if(pokemon.name === squadraBuioName){
          this.squadraBuio = pokemon;
        }
      }
    }
  }
}
