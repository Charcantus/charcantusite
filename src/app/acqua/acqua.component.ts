import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acqua',
  templateUrl: './acqua.component.html',
  styleUrls: ['./acqua.component.css']
})
export class AcquaComponent implements OnInit {


  constructor() { }

  pokemonAcqua: {name:string, image:string}[] = [
    {name: 'Blastoise', image: 'https://img.pokemondb.net/sprites/home/normal/blastoise.png'},
    {name: 'Squirtle', image: 'https://img.pokemondb.net/sprites/home/normal/squirtle.png'},
    {name: 'Gyarados', image: 'https://img.pokemondb.net/sprites/home/normal/gyarados.png'},
    {name: 'Vaporeon', image: 'https://img.pokemondb.net/sprites/home/normal/vaporeon.png'},
    {name: 'Poliwag', image: 'https://img.pokemondb.net/sprites/home/normal/poliwag.png'},
    {name: 'Poliwhirl', image: 'https://img.pokemondb.net/sprites/home/normal/poliwhirl.png'},
    {name: 'Mudkip', image: 'https://img.pokemondb.net/sprites/home/normal/mudkip.png'},
    {name: 'Swampert', image: 'https://img.pokemondb.net/sprites/home/normal/swampert.png'},
    {name: 'Lapras', image: 'https://img.pokemondb.net/sprites/home/normal/lapras.png'},
    {name: 'Totodile', image: 'https://img.pokemondb.net/sprites/home/normal/totodile.png'},
    {name: 'Feraligatr', image: 'https://img.pokemondb.net/sprites/home/normal/feraligatr.png'},
    {name: 'Piplup', image: 'https://img.pokemondb.net/sprites/home/normal/piplup.png'},
    {name: 'Empoleon', image: 'https://img.pokemondb.net/sprites/home/normal/empoleon.png'},
    {name: 'Oshawott', image: 'https://img.pokemondb.net/sprites/home/normal/oshawott.png'},
    {name: 'Samurott', image: 'https://img.pokemondb.net/sprites/home/normal/samurott.png'},
  ]
  squadraAcqua: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('acqua') === null){
      this.squadraAcqua = this.pokemonAcqua[Math.floor(Math.random() * this.pokemonAcqua.length)];
      localStorage.setItem('acqua', this.squadraAcqua.name);
    }else{
      this.firstTime = false;
      let squadraAcquaName = localStorage.getItem('acqua')!;
      for(let pokemon of this.pokemonAcqua){
        if(pokemon.name === squadraAcquaName){
          this.squadraAcqua = pokemon;
        }
      }
    }
  }
}
