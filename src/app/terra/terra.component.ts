import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terra',
  templateUrl: './terra.component.html',
  styleUrls: ['./terra.component.css']
})
export class TerraComponent implements OnInit {
  constructor() { }

  pokemonTerra: {name:string, image:string}[] = [
    {name: 'Sandshrew', image: 'https://img.pokemondb.net/sprites/home/normal/sandshrew.png'},
    {name: 'Diglett', image: 'https://img.pokemondb.net/sprites/home/normal/diglett.png'},
    {name: 'Cubone', image: 'https://img.pokemondb.net/sprites/home/normal/cubone.png'},
    {name: 'Phanpy', image: 'https://img.pokemondb.net/sprites/home/normal/phanpy.png'},
    {name: 'Trapinch', image: 'https://img.pokemondb.net/sprites/home/normal/trapinch.png'},
    {name: 'Gible', image: 'https://img.pokemondb.net/sprites/home/normal/gible.png'},
    {name: 'Sandile', image: 'https://img.pokemondb.net/sprites/home/normal/sandile.png'},
    {name: 'Drilbur', image: 'https://img.pokemondb.net/sprites/home/normal/drilbur.png'},
    {name: 'Golett', image: 'https://img.pokemondb.net/sprites/home/normal/golett.png'},
    {name: 'Mudbray', image: 'https://img.pokemondb.net/sprites/home/normal/mudbray.png'},
    {name: 'Diggersby', image: 'https://img.pokemondb.net/sprites/home/normal/diggersby.png'},
    {name: 'Excadrill', image: 'https://img.pokemondb.net/sprites/home/normal/excadrill.png'},
    {name: 'Golurk', image: 'https://img.pokemondb.net/sprites/home/normal/golurk.png'},
    {name: 'Mudsdale', image: 'https://img.pokemondb.net/sprites/home/normal/mudsdale.png'},
    {name: 'Golisopod', image: 'https://img.pokemondb.net/sprites/home/normal/golisopod.png'},
  ]
  squadraTerra: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('terra') === null){
      this.squadraTerra = this.pokemonTerra[Math.floor(Math.random() * this.pokemonTerra.length)];
      localStorage.setItem('terra', this.squadraTerra.name);
    }else{
      this.firstTime = false;
      let squadraTerraName = localStorage.getItem('terra')!;
      for(let pokemon of this.pokemonTerra){
        if(pokemon.name === squadraTerraName){
          this.squadraTerra = pokemon;
        }
      }
    }
  }
}
