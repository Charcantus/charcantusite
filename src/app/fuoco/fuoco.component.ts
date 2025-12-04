import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuoco',
  templateUrl: './fuoco.component.html',
  styleUrls: ['./fuoco.component.css']
})
export class FuocoComponent implements OnInit {

  constructor() { }

  pokemonFuoco: {name:string, image:string}[] = [
    {name: 'Charizard', image: 'https://img.pokemondb.net/sprites/home/normal/charizard.png'},
    {name: 'Vulpix', image: 'https://img.pokemondb.net/sprites/home/normal/vulpix.png'},
    {name: 'Magmar', image: 'https://img.pokemondb.net/sprites/home/normal/magmar.png'},
    {name: 'Flareon', image: 'https://img.pokemondb.net/sprites/home/normal/flareon.png'},
    {name: 'Growlithe', image: 'https://img.pokemondb.net/sprites/home/normal/growlithe.png'},
    {name: 'Arcanine', image: 'https://img.pokemondb.net/sprites/home/normal/arcanine.png'},
    {name: 'Cyndaquil', image: 'https://img.pokemondb.net/sprites/home/normal/quilava.png'},
    {name: 'Rapidash', image: 'https://img.pokemondb.net/sprites/home/normal/rapidash.png'},
    {name: 'Houndoom', image: 'https://img.pokemondb.net/sprites/home/normal/houndoom.png'},
    {name: 'Blaziken', image: 'https://img.pokemondb.net/sprites/home/normal/blaziken.png'},
    {name: 'Torkoal', image: 'https://img.pokemondb.net/sprites/home/normal/torkoal.png'},
    {name: 'Infernape', image: 'https://img.pokemondb.net/sprites/home/normal/infernape.png'},
    {name: 'Emboar', image: 'https://img.pokemondb.net/sprites/home/normal/emboar.png'},
    {name: 'Delphox', image: 'https://img.pokemondb.net/sprites/home/normal/delphox.png'},
    {name: 'Pyroar', image: 'https://img.pokemondb.net/sprites/home/normal/pyroar.png'},
  ]
  squadraFuoco: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('fuoco') === null){
      this.squadraFuoco = this.pokemonFuoco[Math.floor(Math.random() * this.pokemonFuoco.length)];
      localStorage.setItem('fuoco', this.squadraFuoco.name);
    }else{
      this.firstTime = false;
      let squadraFuocoName = localStorage.getItem('fuoco')!;
      for(let pokemon of this.pokemonFuoco){
        if(pokemon.name === squadraFuocoName){
          this.squadraFuoco = pokemon;
        }
      }
    }
  }
}
