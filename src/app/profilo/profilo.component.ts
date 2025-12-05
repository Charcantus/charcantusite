import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor() { }

  pokemonVolante: {name:string, image:string}[] = [
    {name: 'Charizard', image: 'https://img.pokemondb.net/sprites/home/normal/charizard.png'},
    {name: 'Pidgeot', image: 'https://img.pokemondb.net/sprites/home/normal/pidgeot.png'},
    {name: 'Gyarados', image: 'https://img.pokemondb.net/sprites/home/normal/gyarados.png'},
    {name: 'Dragonite', image: 'https://img.pokemondb.net/sprites/home/normal/dragonite.png'},
    {name: 'Togekiss', image: 'https://img.pokemondb.net/sprites/home/normal/togekiss.png'},
    {name: 'Salamence', image: 'https://img.pokemondb.net/sprites/home/normal/salamence.png'},
    {name: 'Staraptor', image: 'https://img.pokemondb.net/sprites/home/normal/staraptor.png'},
    {name: 'Braviary', image: 'https://img.pokemondb.net/sprites/home/normal/braviary.png'},
    {name: 'Noivern', image: 'https://img.pokemondb.net/sprites/home/normal/noivern.png'},
    {name: 'Aerodactyl', image: 'https://img.pokemondb.net/sprites/home/normal/aerodactyl.png'},
    {name: 'Altaria', image: 'https://img.pokemondb.net/sprites/home/normal/altaria.png'},
    {name: 'Rayquaza', image: 'https://img.pokemondb.net/sprites/home/normal/rayquaza.png'},
    {name: 'Swanna', image: 'https://img.pokemondb.net/sprites/home/normal/swanna.png'},
    {name: 'Hawlucha', image: 'https://img.pokemondb.net/sprites/home/normal/hawlucha.png'},
    {name: 'Corviknight', image: 'https://img.pokemondb.net/sprites/home/normal/corviknight.png'},
  ]
  squadraVolante: {name:string; image:string} = {name: '', image: ''};

  pokemonVeleno: {name:string, image:string}[] = [
    {name: 'Arbok', image: 'https://img.pokemondb.net/sprites/home/normal/arbok.png'},
    {name: 'Weezing', image: 'https://img.pokemondb.net/sprites/home/normal/weezing.png'},
    {name: 'Gengar', image: 'https://img.pokemondb.net/sprites/home/normal/gengar.png'},
    {name: 'Muk', image: 'https://img.pokemondb.net/sprites/home/normal/muk.png'},
    {name: 'Crobat', image: 'https://img.pokemondb.net/sprites/home/normal/crobat.png'},
    {name: 'Tentacruel', image: 'https://img.pokemondb.net/sprites/home/normal/tentacruel.png'},
    {name: 'Scolipede', image: 'https://img.pokemondb.net/sprites/home/normal/scolipede.png'},
    {name: 'Toxicroak', image: 'https://img.pokemondb.net/sprites/home/normal/toxicroak.png'},
    {name: 'Salazzle', image: 'https://img.pokemondb.net/sprites/home/normal/salazzle.png'},
    {name: 'Dragalge', image: 'https://img.pokemondb.net/sprites/home/normal/dragalge.png'},
    {name: 'Garbodor', image: 'https://img.pokemondb.net/sprites/home/normal/garbodor.png'},
    {name: 'Gloom', image: 'https://img.pokemondb.net/sprites/home/normal/gloom.png'},
    {name: 'Zubat', image: 'https://img.pokemondb.net/sprites/home/normal/zubat.png'},
    {name: 'Oddish', image: 'https://img.pokemondb.net/sprites/home/normal/oddish.png'},
    {name: 'Foongus', image: 'https://img.pokemondb.net/sprites/home/normal/foongus.png'},
  ]
  squadraVeleno: {name:string; image:string} = {name: '', image: ''};

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
  pokemonRoccia: {name:string, image:string}[] = [
    {name: 'Golem', image: 'https://img.pokemondb.net/sprites/home/normal/golem.png'},
    {name: 'Onix', image: 'https://img.pokemondb.net/sprites/home/normal/onix.png'},
    {name: 'Rhyhorn', image: 'https://img.pokemondb.net/sprites/home/normal/rhyhorn.png'},
    {name: 'Geodude', image: 'https://img.pokemondb.net/sprites/home/normal/geodude.png'},
    {name: 'Sudowoodo', image: 'https://img.pokemondb.net/sprites/home/normal/sudowoodo.png'},
    {name: 'Larvitar', image: 'https://img.pokemondb.net/sprites/home/normal/larvitar.png'},
    {name: 'Tyranitar', image: 'https://img.pokemondb.net/sprites/home/normal/tyranitar.png'},
    {name: 'Nosepass', image: 'https://img.pokemondb.net/sprites/home/normal/nosepass.png'},
    {name: 'Cranidos', image: 'https://img.pokemondb.net/sprites/home/normal/cranidos.png'},
    {name: 'Shieldon', image: 'https://img.pokemondb.net/sprites/home/normal/shieldon.png'},
    {name: 'Boldore', image: 'https://img.pokemondb.net/sprites/home/normal/boldore.png'},
    {name: 'Gigalith', image: 'https://img.pokemondb.net/sprites/home/normal/gigalith.png'},
    {name: 'Roggenrola', image: 'https://img.pokemondb.net/sprites/home/normal/roggenrola.png'},
    {name: 'Carracosta', image: 'https://img.pokemondb.net/sprites/home/normal/carracosta.png'},
    {name: 'Tirtouga', image: 'https://img.pokemondb.net/sprites/home/normal/tirtouga.png'},
  ]
  squadraRoccia: {name:string; image:string} = {name: '', image: ''};

  pokemonPsico: {name:string, image:string}[] = [
    {name: 'Mew', image: 'https://img.pokemondb.net/sprites/home/normal/mew.png'},
    {name: 'Alakazam', image: 'https://img.pokemondb.net/sprites/home/normal/alakazam.png'},
    {name: 'Gardevoir', image: 'https://img.pokemondb.net/sprites/home/normal/gardevoir.png'},
    {name: 'Espeon', image: 'https://img.pokemondb.net/sprites/home/normal/espeon.png'},
    {name: 'Hypno', image: 'https://img.pokemondb.net/sprites/home/normal/hypno.png'},
    {name: 'Metagross', image: 'https://img.pokemondb.net/sprites/home/normal/metagross.png'},
    {name: 'Slowbro', image: 'https://img.pokemondb.net/sprites/home/normal/slowbro.png'},
    {name: 'Starmie', image: 'https://img.pokemondb.net/sprites/home/normal/starmie.png'},
    {name: 'Jynx', image: 'https://img.pokemondb.net/sprites/home/normal/jynx.png'},
    {name: 'Espeon', image: 'https://img.pokemondb.net/sprites/home/normal/espeon.png'},
    {name: 'Gothitelle', image: 'https://img.pokemondb.net/sprites/home/normal/gothitelle.png'},
    {name: 'Reuniclus', image: 'https://img.pokemondb.net/sprites/home/normal/reuniclus.png'},
    {name: 'Malamar', image: 'https://img.pokemondb.net/sprites/home/normal/malamar.png'},
    {name: 'Sigilyph', image: 'https://img.pokemondb.net/sprites/home/normal/sigilyph.png'},
    {name: 'Musharna', image: 'https://img.pokemondb.net/sprites/home/normal/musharna.png'},
  ]
  squadraPsico: {name:string; image:string} = {name: '', image: ''};

  pokemonLotta: {name:string, image:string}[] = [
    {name: 'Lucario', image: 'https://img.pokemondb.net/sprites/home/normal/lucario.png'},
    {name: 'Machamp', image: 'https://img.pokemondb.net/sprites/home/normal/machamp.png'},
    {name: 'Conkeldurr', image: 'https://img.pokemondb.net/sprites/home/normal/conkeldurr.png'},
    {name: 'Heracross', image: 'https://img.pokemondb.net/sprites/home/normal/heracross.png'},
    {name: 'Gallade', image: 'https://img.pokemondb.net/sprites/home/normal/gallade.png'},
    {name: 'Hawlucha', image: 'https://img.pokemondb.net/sprites/home/normal/hawlucha.png'},
    {name: 'Breloom', image: 'https://img.pokemondb.net/sprites/home/normal/breloom.png'},
    {name: 'Toxicroak', image: 'https://img.pokemondb.net/sprites/home/normal/toxicroak.png'},
    {name: 'Scrafty', image: 'https://img.pokemondb.net/sprites/home/normal/scrafty.png'},
    {name: 'Zangoose', image: 'https://img.pokemondb.net/sprites/home/normal/zangoose.png'},
    {name: 'Mienshao', image: 'https://img.pokemondb.net/sprites/home/normal/mienshao.png'},
    {name: 'Urshifu', image: 'https://img.pokemondb.net/sprites/home/normal/urshifu.png'},
    {name: 'Cobalion', image: 'https://img.pokemondb.net/sprites/home/normal/cobalion.png'},
    {name: 'Passimian', image: 'https://img.pokemondb.net/sprites/home/normal/passimian.png'},
    {name: 'Buzzwole', image: 'https://img.pokemondb.net/sprites/home/normal/buzzwole.png'},
  ]
  squadraLotta: {name:string; image:string} = {name: '', image: ''};

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

  pokemonErba: {name:string, image:string}[] = [
    {name: 'Bulbasaur', image: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png'},
    {name: 'Oddish', image: 'https://img.pokemondb.net/sprites/home/normal/oddish.png'},
    {name: 'Bellsprout', image: 'https://img.pokemondb.net/sprites/home/normal/bellsprout.png'},
    {name: 'Exeggcute', image: 'https://img.pokemondb.net/sprites/home/normal/exeggcute.png'},
    {name: 'Tangela', image: 'https://img.pokemondb.net/sprites/home/normal/tangela.png'},
    {name: 'Chikorita', image: 'https://img.pokemondb.net/sprites/home/normal/chikorita.png'},
    {name: 'Treecko', image: 'https://img.pokemondb.net/sprites/home/normal/treecko.png'},
    {name: 'Turtwig', image: 'https://img.pokemondb.net/sprites/home/normal/turtwig.png'},
    {name: 'Snivy', image: 'https://img.pokemondb.net/sprites/home/normal/snivy.png'},
    {name: 'Chespin', image: 'https://img.pokemondb.net/sprites/home/normal/chespin.png'},
    {name: 'Rowlet', image: 'https://img.pokemondb.net/sprites/home/normal/rowlet.png'},
    {name: 'Grookey', image: 'https://img.pokemondb.net/sprites/home/normal/grookey.png'},
    {name: 'Sprigatito', image: 'https://img.pokemondb.net/sprites/home/normal/sprigatito.png'},
    {name: 'Leafeon', image: 'https://img.pokemondb.net/sprites/home/normal/leafeon.png'},
    {name: 'Sceptile', image: 'https://img.pokemondb.net/sprites/home/normal/sceptile.png'},
  ]
  squadraErba: {name:string; image:string} = {name: '', image: ''};
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
  pokemonElettro: {name:string, image:string}[] = [
    {name: 'Electrode', image: 'https://img.pokemondb.net/sprites/home/normal/electrode.png'},
    {name: 'Pikachu', image: 'https://img.pokemondb.net/sprites/home/normal/pikachu.png'},
    {name: 'Jolteon', image: 'https://img.pokemondb.net/sprites/home/normal/jolteon.png'},
    {name: 'Zapdos', image: 'https://img.pokemondb.net/sprites/home/normal/zapdos.png'},
    {name: 'Raichu', image: 'https://img.pokemondb.net/sprites/home/normal/raichu.png'},
    {name: 'Ampharos', image: 'https://img.pokemondb.net/sprites/home/normal/ampharos.png'},
    {name: 'Magnezone', image: 'https://img.pokemondb.net/sprites/home/normal/magnezone.png'},
    {name: 'Electivire', image: 'https://img.pokemondb.net/sprites/home/normal/electivire.png'},
    {name: 'Rotom', image: 'https://img.pokemondb.net/sprites/home/normal/rotom.png'},
    {name: 'Zeraora', image: 'https://img.pokemondb.net/sprites/home/normal/zeraora.png'},
    {name: 'Togedemaru', image: 'https://img.pokemondb.net/sprites/home/normal/togedemaru.png'},
    {name: 'Xurkitree', image: 'https://img.pokemondb.net/sprites/home/normal/xurkitree.png'},
    {name: 'Eelektross', image: 'https://img.pokemondb.net/sprites/home/normal/eelektross.png'},
    {name: 'Galvantula', image: 'https://img.pokemondb.net/sprites/home/normal/galvantula.png'},
    {name: 'Luxray', image: 'https://img.pokemondb.net/sprites/home/normal/luxray.png'},
  ]
  squadraElettro: {name:string; image:string} = {name: '', image: ''};
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

  pokemonBuio: {name:string, image:string}[] = [
    {name: 'Umbreon', image: 'https://img.pokemondb.net/sprites/home/normal/umbreon.png'},
    {name: 'Sableye', image: 'https://img.pokemondb.net/sprites/home/normal/sableye.png'},
    {name: 'Murkrow', image: 'https://img.pokemondb.net/sprites/home/normal/murkrow.png'},
    {name: 'Spiritomb', image: 'https://img.pokemondb.net/sprites/home/normal/spiritomb.png'},
    {name: 'Honchkrow', image: 'https://img.pokemondb.net/sprites/home/normal/honchkrow.png'},
    {name: 'Darkrai', image: 'https://img.pokemondb.net/sprites/home/normal/darkrai.png'},
    {name: 'Yveltal', image: 'https://img.pokemondb.net/sprites/home/normal/yveltal.png'},
    {name: 'Zoroark', image: 'https://img.pokemondb.net/sprites/home/normal/zoroark.png'},
    {name: 'Cacturne', image: 'https://img.pokemondb.net/sprites/home/normal/cacturne.png'},
    {name: 'Weavile', image: 'https://img.pokemondb.net/sprites/home/normal/weavile.png'},
    {name: 'Tyranitar', image: 'https://img.pokemondb.net/sprites/home/normal/tyranitar.png'},
    {name: 'Greninja', image: 'https://img.pokemondb.net/sprites/home/normal/greninja.png'},
    {name: 'Bisharp', image: 'https://img.pokemondb.net/sprites/home/normal/bisharp.png'},
    {name: 'Hydreigon', image: 'https://img.pokemondb.net/sprites/home/normal/hydreigon.png'},
    {name: 'Yamask', image: 'https://img.pokemondb.net/sprites/home/normal/yamask.png'},
  ]
  squadraBuio: {name:string; image:string} = {name: '', image: ''};

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

  allenatori: {name:string, image:string}[] = [
    {name: 'bambino', image:'https://play.pokemonshowdown.com/sprites/trainers/blackbelt-gen1rb.png'},
    {name: 'bambina', image:'https://play.pokemonshowdown.com/sprites/trainers/beauty-gen1rb.png'},
    {name: 'gennaro', image: 'https://play.pokemonshowdown.com/sprites/trainers/youngster-gen1rb.png'},
    {name: 'pino', image: 'https://play.pokemonshowdown.com/sprites/trainers/will-gen2.png'},
    {name: 'sabrina', image:'https://play.pokemonshowdown.com/sprites/trainers/sabrina-lgpe.png'},
    {name: 'riccardo', image:'https://play.pokemonshowdown.com/sprites/trainers/rollerskater.png'},
    {name: 'n', image:'https://play.pokemonshowdown.com/sprites/trainers/n.png'},
    {name: 'toon n', image:'https://play.pokemonshowdown.com/sprites/trainers/youngn.png'},
    {name: 'agatha', image:'https://play.pokemonshowdown.com/sprites/trainers/agatha-gen1rb.png'},
    {name: 'carmine', image:'https://play.pokemonshowdown.com/sprites/trainers/chef.png'},
    {name: 'ash', image:'https://play.pokemonshowdown.com/sprites/trainers/ash-capbackward.png'},
    {name: 'pelato', image:'https://play.pokemonshowdown.com/sprites/trainers/blaine-gen1rb.png'},
    {name: 'gary', image:'https://play.pokemonshowdown.com/sprites/trainers/blue-gen1rb.png'},
    {name: 'snowboarder', image:'https://play.pokemonshowdown.com/sprites/trainers/boarder-gen2.png'},
    {name: 'brendan', image:'https://play.pokemonshowdown.com/sprites/trainers/brendan-e.png'},
    {name: 'bruno', image:'https://play.pokemonshowdown.com/sprites/trainers/bruno-gen1rb.png'},
    {name: 'pescatrice', image:'https://play.pokemonshowdown.com/sprites/trainers/yellow.png'},
    {name: 'ladro', image:'https://play.pokemonshowdown.com/sprites/trainers/burglar-gen2.png'},
    {name: 'pagliaso', image:'https://play.pokemonshowdown.com/sprites/trainers/clown.png'},
    {name: 'superdottoressa', image:'https://play.pokemonshowdown.com/sprites/trainers/sonia-professor.png'},
    {name: 'io guido', image:'https://play.pokemonshowdown.com/sprites/trainers/streetthug.png'}


  ]
  allenatoreSelezionato: {name:string; image:string} = {name: '', image: ''};
  nomeAllenatore = ""
  nomeMesso = false
  alleMesso = false
  quantimon = 0;


  ngOnInit(): void {
    if(localStorage.getItem('allenatore') === null || localStorage.getItem('allenatore') === ''){
      this.nomeMesso = false
    }else{
      this.nomeMesso = true
      this.nomeAllenatore = localStorage.getItem('allenatore')!;
    }
    if(localStorage.getItem('allename') === null){
      this.alleMesso = false
    }else{
      this.alleMesso = true
      this.allenatoreSelezionato = this.allenatori.find(a => a.name === localStorage.getItem('allename'))!;
    }

    if(localStorage.getItem('volante') === null){

    }else{
      let squadraVolanteName = localStorage.getItem('volante')!;
      for(let pokemon of this.pokemonVolante){
        if(pokemon.name === squadraVolanteName){
          this.quantimon+=1
          this.squadraVolante = pokemon;
        }
      }
    }
    if(localStorage.getItem('veleno') === null){

    }else{
      let squadraVelenoName = localStorage.getItem('veleno')!;
      for(let pokemon of this.pokemonVeleno){
        if(pokemon.name === squadraVelenoName){
          this.quantimon+=1
          this.squadraVeleno = pokemon;
        }
      }
    }
    if(localStorage.getItem('terra') === null){

    }else{
      let squadraTerraName = localStorage.getItem('terra')!;
      for(let pokemon of this.pokemonTerra){
        if(pokemon.name === squadraTerraName){
          this.quantimon+=1
          this.squadraTerra = pokemon;
        }
      }
    }
    if(localStorage.getItem('roccia') === null){

    }else{
      let squadraRocciaName = localStorage.getItem('roccia')!;
      for(let pokemon of this.pokemonRoccia){
        if(pokemon.name === squadraRocciaName){
          this.quantimon+=1
          this.squadraRoccia = pokemon;
        }
      }
    }
    if(localStorage.getItem('psico') === null){
    }else{
      let squadraPsicoName = localStorage.getItem('psico')!;
      for(let pokemon of this.pokemonPsico){
        if(pokemon.name === squadraPsicoName){
          this.quantimon+=1
          this.squadraPsico = pokemon;
        }
      }
    }
    if(localStorage.getItem('lotta') === null){

    }else{
      let squadraLottaName = localStorage.getItem('lotta')!;
      for(let pokemon of this.pokemonLotta){
        if(pokemon.name === squadraLottaName){
          this.quantimon+=1
          this.squadraLotta = pokemon;
        }
      }
    }
    if(localStorage.getItem('ghiaccio') === null){
    }else{
      let squadraGhiaccioName = localStorage.getItem('ghiaccio')!;
      for(let pokemon of this.pokemonGhiaccio){
        if(pokemon.name === squadraGhiaccioName){
          this.quantimon+=1
          this.squadraGhiaccio = pokemon;
        }
      }
    }
    if(localStorage.getItem('erba') === null){
    }else{
      let squadraErbaName = localStorage.getItem('erba')!;
      for(let pokemon of this.pokemonErba){
        if(pokemon.name === squadraErbaName){
          this.quantimon+=1
          this.squadraErba = pokemon;
        }
      }
    }
    if(localStorage.getItem('fuoco') === null){
    }else{
      let squadraFuocoName = localStorage.getItem('fuoco')!;
      for(let pokemon of this.pokemonFuoco){
        if(pokemon.name === squadraFuocoName){
          this.quantimon+=1
          this.squadraFuoco = pokemon;
        }
      }
    }
    if(localStorage.getItem('elettro') === null){
    }else{
      let squadraElettroName = localStorage.getItem('elettro')!;
      for(let pokemon of this.pokemonElettro){
        if(pokemon.name === squadraElettroName){
          this.quantimon+=1
          this.squadraElettro = pokemon;
        }
      }
    }
    if(localStorage.getItem('coleottero') === null){
    }else{
      let squadraColeotteroName = localStorage.getItem('coleottero')!;
      for(let pokemon of this.pokemonColeottero){
        if(pokemon.name === squadraColeotteroName){
          this.quantimon+=1
          this.squadraColeottero = pokemon;
        }
      }
    }
    if(localStorage.getItem('buio') === null){
    }else{
      let squadraBuioName = localStorage.getItem('buio')!;
      for(let pokemon of this.pokemonBuio){
        if(pokemon.name === squadraBuioName){
          this.quantimon+=1
          this.squadraBuio = pokemon;
        }
      }
    }
    if(localStorage.getItem('acqua') === null){
    }else{
      let squadraAcquaName = localStorage.getItem('acqua')!;
      for(let pokemon of this.pokemonAcqua){
        if(pokemon.name === squadraAcquaName){
          this.quantimon+=1
          this.squadraAcqua = pokemon;
        }
      }
    }
    if(localStorage.getItem('acciaio') === null){
    }else{
      let squadraAcciaioName = localStorage.getItem('acciaio')!;
      for(let pokemon of this.pokemonAcciaio){
        if(pokemon.name === squadraAcciaioName){
          this.quantimon+=1
          this.squadraAcciaio = pokemon;
        }
      }
    }


  }

  salvaNome(){
    localStorage.setItem('allenatore', this.nomeAllenatore);
    this.nomeMesso = true;
  }

  impostaAvatar(name:string, image:string) {
    this.allenatoreSelezionato = {name, image};
    localStorage.setItem('allename', name);
    this.alleMesso = true
  }

  resetProfilo() {
    localStorage.removeItem('allenatore');
    localStorage.removeItem('allename');
    this.nomeAllenatore = "";
    this.nomeMesso = false;
    this.allenatoreSelezionato = {name: '', image: ''};
  }
}
