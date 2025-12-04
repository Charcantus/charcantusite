import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acciaio',
  templateUrl: './acciaio.component.html',
  styleUrls: ['./acciaio.component.css']
})
export class AcciaioComponent implements OnInit {
  constructor() { }

  pokemonAcciaio: {name:string, image:string}[] = [
    {name: 'Skarmory', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/skarmory.png'},
    {name: 'Magnezone', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/magnezone.png'},
    {name: 'Metagross', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/metagross.png'},
    {name: 'Steelix', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/steelix.png'},
    {name: 'Aegislash', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/aegislash-shield.png'},
    {name: 'Empoleon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/empoleon.png'},
    {name: 'Jirachi', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/jirachi.png'},
    {name: 'Cobalion', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cobalion.png'},
    {name: 'Durant', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/durant.png'},
    {name: 'Bisharp', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bisharp.png'},
    {name: 'Scizor', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scizor.png'},
    {name: 'Excadrill', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/excadrill.png'},
    {name: 'Ferrothorn', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/ferrothorn.png'},
    {name: 'Aggron', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/aggron.png'},
    {name: 'Heatran', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/heatran.png'},
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
