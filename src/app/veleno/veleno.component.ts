import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veleno',
  templateUrl: './veleno.component.html',
  styleUrls: ['./veleno.component.css']
})
export class VelenoComponent implements OnInit {
  constructor() { }

  pokemonVeleno: {name:string, image:string}[] = [
    {name: 'Arbok', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/arbok.png'},
    {name: 'Weezing', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/weezing.png'},
    {name: 'Gengar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gengar.png'},
    {name: 'Muk', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/muk.png'},
    {name: 'Crobat', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/crobat.png'},
    {name: 'Tentacruel', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tentacruel.png'},
    {name: 'Scolipede', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scolipede.png'},
    {name: 'Toxicroak', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/toxicroak.png'},
    {name: 'Salazzle', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/salazzle.png'},
    {name: 'Dragalge', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragalge.png'},
    {name: 'Garbodor', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/garbodor.png'},
    {name: 'Gloom', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gloom.png'},
    {name: 'Zubat', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zubat.png'},
    {name: 'Oddish', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/oddish.png'},
    {name: 'Foongus', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/foongus.png'},
  ]
  squadraVeleno: {name:string; image:string} = {name: '', image: ''};

  firstTime = true;

  ngOnInit(): void {
    if(localStorage.getItem('veleno') === null){
      this.squadraVeleno = this.pokemonVeleno[Math.floor(Math.random() * this.pokemonVeleno.length)];
      localStorage.setItem('veleno', this.squadraVeleno.name);
    }else{
      this.firstTime = false;
      let squadraVelenoName = localStorage.getItem('veleno')!;
      for(let pokemon of this.pokemonVeleno){
        if(pokemon.name === squadraVelenoName){
          this.squadraVeleno = pokemon;
        }
      }
    }
  }
}
