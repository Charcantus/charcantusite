import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghiaccio',
  templateUrl: './ghiaccio.component.html',
  styleUrls: ['./ghiaccio.component.css']
})
export class GhiaccioComponent implements OnInit {
  constructor() { }

  pokemonGhiaccio: {name:string, image:string}[] = [
    {name: 'Articuno', image: 'https://img.pokemondb.net/sprites/home/normal/articuno.png'},
    {name: 'Jynx', image: 'https://img.pokemondb.net/sprites/home/normal/jynx.png'},
    {name: 'Lapras', image: 'https://img.pokemondb.net/sprites/home/normal/lapras.png'},
    {name: 'Glaceon', image: 'https://img.pokemondb.net/sprites/home/normal/glaceon.png'},
    {name: 'Sneasel', image: 'https://img.pokemondb.net/sprites/home/normal/sneasel.png'},
    {name: 'Weavile', image: 'https://img.pokemondb.net/sprites/home/normal/weavile.png'},
    {name: 'Snorunt', image: 'https://img.pokemondb.net/sprites/home/normal/snorunt.png'},
    {name: 'Froslass', image: 'https://img.pokemondb.net/sprites/home/normal/froslass.png'},
    {name: 'Spheal', image: 'https://img.pokemondb.net/sprites/home/normal/spheal.png'},
    {name: 'Sealeo', image: 'https://img.pokemondb.net/sprites/home/normal/sealeo.png'},
    {name: 'Walrein', image: 'https://img.pokemondb.net/sprites/home/normal/walrein.png'},
    {name: 'Cubchoo', image: 'https://img.pokemondb.net/sprites/home/normal/cubchoo.png'},
    {name: 'Beartic', image: 'https://img.pokemondb.net/sprites/home/normal/beartic.png'},
    {name: 'Cryogonal', image: 'https://img.pokemondb.net/sprites/home/normal/cryogonal.png'},
    {name: 'Regice', image: 'https://img.pokemondb.net/sprites/home/normal/regice.png'},
  ]
  squadraGhiaccio: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('ghiaccio') === null){
      this.squadraGhiaccio = this.pokemonGhiaccio[Math.floor(Math.random() * this.pokemonGhiaccio.length)];
      localStorage.setItem('ghiaccio', this.squadraGhiaccio.name);
    }else{
      this.firstTime = false;
      let squadraGhiaccioName = localStorage.getItem('ghiaccio')!;
      for(let pokemon of this.pokemonGhiaccio){
        if(pokemon.name === squadraGhiaccioName){
          this.squadraGhiaccio = pokemon;
        }
      }
    }
  }
}
