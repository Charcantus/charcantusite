import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coleottero',
  templateUrl: './coleottero.component.html',
  styleUrls: ['./coleottero.component.css']
})
export class ColeotteroComponent implements OnInit {
  constructor() { }

  pokemonColeottero: {name:string, image:string}[] = [
    {name: 'Scyther', image: 'https://img.pokemondb.net/sprites/home/normal/scyther.png'},
    {name: 'Heracross', image: 'https://img.pokemondb.net/sprites/home/normal/heracross.png'},
    {name: 'Pinsir', image: 'https://img.pokemondb.net/sprites/home/normal/pinsir.png'},
    {name: 'Volbeat', image: 'https://img.pokemondb.net/sprites/home/normal/volbeat.png'},
    {name: 'Illumise', image: 'https://img.pokemondb.net/sprites/home/normal/illumise.png'},
    {name: 'Wurmple', image: 'https://img.pokemondb.net/sprites/home/normal/wurmple.png'},
    {name: 'Beautifly', image: 'https://img.pokemondb.net/sprites/home/normal/beautifly.png'},
    {name: 'Dustox', image: 'https://img.pokemondb.net/sprites/home/normal/dustox.png'},
    {name: 'Surskit', image: 'https://img.pokemondb.net/sprites/home/normal/surskit.png'},
    {name: 'Masquerain', image: 'https://img.pokemondb.net/sprites/home/normal/masquerain.png'},
    {name: 'Nincada', image: 'https://img.pokemondb.net/sprites/home/normal/nincada.png'},
    {name: 'Ninjask', image: 'https://img.pokemondb.net/sprites/home/normal/ninjask.png'},
    {name: 'Shedinja', image: 'https://img.pokemondb.net/sprites/home/normal/shedinja.png'},
    {name: 'Volcarona', image: 'https://img.pokemondb.net/sprites/home/normal/volcarona.png'},
    {name: 'Genesect', image: 'https://img.pokemondb.net/sprites/home/normal/genesect.png'},
  ]
  squadraColeottero: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('coleottero') === null){
      this.squadraColeottero = this.pokemonColeottero[Math.floor(Math.random() * this.pokemonColeottero.length)];
      localStorage.setItem('coleottero', this.squadraColeottero.name);
    }else{
      this.firstTime = false;
      let squadraColeotteroName = localStorage.getItem('coleottero')!;
      for(let pokemon of this.pokemonColeottero){
        if(pokemon.name === squadraColeotteroName){
          this.squadraColeottero = pokemon;
        }
      }
    }
  }
}

