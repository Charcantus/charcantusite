import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acciaio',
  templateUrl: './acciaio.component.html',
  styleUrls: ['./acciaio.component.css']
})
export class AcciaioComponent implements OnInit {
  constructor() { }

  pokemonAcciaio: {name:string, image:string}[] = [
    {name: 'Skarmory', image: 'https://img.pokemondb.net/sprites/home/normal/skarmory.png'},
    {name: 'Magnezone', image: 'https://img.pokemondb.net/sprites/home/normal/magnezone.png'},
    {name: 'Metagross', image: 'https://img.pokemondb.net/sprites/home/normal/metagross.png'},
    {name: 'Steelix', image: 'https://img.pokemondb.net/sprites/home/normal/steelix.png'},
    {name: 'Aegislash', image: 'https://img.pokemondb.net/sprites/home/normal/aegislash-shield.png'},
    {name: 'Empoleon', image: 'https://img.pokemondb.net/sprites/home/normal/empoleon.png'},
    {name: 'Jirachi', image: 'https://img.pokemondb.net/sprites/home/normal/jirachi.png'},
    {name: 'Cobalion', image: 'https://img.pokemondb.net/sprites/home/normal/cobalion.png'},
    {name: 'Durant', image: 'https://img.pokemondb.net/sprites/home/normal/durant.png'},
    {name: 'Bisharp', image: 'https://img.pokemondb.net/sprites/home/normal/bisharp.png'},
    {name: 'Scizor', image: 'https://img.pokemondb.net/sprites/home/normal/scizor.png'},
    {name: 'Excadrill', image: 'https://img.pokemondb.net/sprites/home/normal/excadrill.png'},
    {name: 'Ferrothorn', image: 'https://img.pokemondb.net/sprites/home/normal/ferrothorn.png'},
    {name: 'Aggron', image: 'https://img.pokemondb.net/sprites/home/normal/aggron.png'},
    {name: 'Heatran', image: 'https://img.pokemondb.net/sprites/home/normal/heatran.png'},
  ]
  squadraAcciaio: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('acciaio') === null){
      this.squadraAcciaio = this.pokemonAcciaio[Math.floor(Math.random() * this.pokemonAcciaio.length)];
      localStorage.setItem('acciaio', this.squadraAcciaio.name);
    }else{
      this.firstTime = false;
      let squadraAcciaioName = localStorage.getItem('acciaio')!;
      for(let pokemon of this.pokemonAcciaio){
        if(pokemon.name === squadraAcciaioName){
          this.squadraAcciaio = pokemon;
        }
      }
    }
  }
}
