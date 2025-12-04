import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotta',
  templateUrl: './lotta.component.html',
  styleUrls: ['./lotta.component.css']
})
export class LottaComponent implements OnInit {
  constructor() { }

  pokemonLotta: {name:string, image:string}[] = [
    {name: 'Lucario', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/lucario.png'},
    {name: 'Machamp', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/machamp.png'},
    {name: 'Conkeldurr', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/conkeldurr.png'},
    {name: 'Heracross', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/heracross.png'},
    {name: 'Gallade', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gallade.png'},
    {name: 'Hawlucha', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hawlucha.png'},
    {name: 'Breloom', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/breloom.png'},
    {name: 'Toxicroak', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/toxicroak.png'},
    {name: 'Scrafty', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scrafty.png'},
    {name: 'Zangoose', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zangoose.png'},
    {name: 'Mienshao', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mienshao.png'},
    {name: 'Urshifu', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/urshifu.png'},
    {name: 'Cobalion', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cobalion.png'},
    {name: 'Passimian', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/passimian.png'},
    {name: 'Buzzwole', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/buzzwole.png'},
  ]
  squadraLotta: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('lotta') === null){
      this.squadraLotta = this.pokemonLotta[Math.floor(Math.random() * this.pokemonLotta.length)];
      localStorage.setItem('lotta', this.squadraLotta.name);
    }else{
      this.firstTime = false;
      let squadraLottaName = localStorage.getItem('lotta')!;
      for(let pokemon of this.pokemonLotta){
        if(pokemon.name === squadraLottaName){
          this.squadraLotta = pokemon;
        }
      }
    }
  }
}
