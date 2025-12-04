import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terra',
  templateUrl: './terra.component.html',
  styleUrls: ['./terra.component.css']
})
export class TerraComponent implements OnInit {
  constructor() { }

  pokemonTerra: {name:string, image:string}[] = [
    {name: 'Sandshrew', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sandshrew.png'},
    {name: 'Diglett', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/diglett.png'},
    {name: 'Cubone', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cubone.png'},
    {name: 'Phanpy', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/phanpy.png'},
    {name: 'Trapinch', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/trapinch.png'},
    {name: 'Gible', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gible.png'},
    {name: 'Sandile', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sandile.png'},
    {name: 'Drilbur', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/drilbur.png'},
    {name: 'Golett', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/golett.png'},
    {name: 'Mudbray', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mudbray.png'},
    {name: 'Diggersby', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/diggersby.png'},
    {name: 'Excadrill', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/excadrill.png'},
    {name: 'Golurk', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/golurk.png'},
    {name: 'Mudsdale', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mudsdale.png'},
    {name: 'Golisopod', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/golisopod.png'},
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
