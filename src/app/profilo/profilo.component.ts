import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor() { }

  pokemonVolante: {name:string, image:string}[] = [
    {name: 'Charizard', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png'},
    {name: 'Pidgeot', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pidgeot.png'},
    {name: 'Gyarados', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gyarados.png'},
    {name: 'Dragonite', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragonite.png'},
    {name: 'Togekiss', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/togekiss.png'},
    {name: 'Salamence', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/salamence.png'},
    {name: 'Staraptor', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/staraptor.png'},
    {name: 'Braviary', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/braviary.png'},
    {name: 'Noivern', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/noivern.png'},
    {name: 'Aerodactyl', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/aerodactyl.png'},
    {name: 'Altaria', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/altaria.png'},
    {name: 'Rayquaza', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rayquaza.png'},
    {name: 'Swanna', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/swanna.png'},
    {name: 'Hawlucha', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hawlucha.png'},
    {name: 'Corviknight', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/corviknight.png'},
  ]
  squadraVolante: {name:string; image:string} = {name: '', image: ''};

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
  pokemonRoccia: {name:string, image:string}[] = [
    {name: 'Golem', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/golem.png'},
    {name: 'Onix', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/onix.png'},
    {name: 'Rhyhorn', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rhyhorn.png'},
    {name: 'Geodude', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/geodude.png'},
    {name: 'Sudowoodo', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sudowoodo.png'},
    {name: 'Larvitar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/larvitar.png'},
    {name: 'Tyranitar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tyranitar.png'},
    {name: 'Nosepass', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/nosepass.png'},
    {name: 'Cranidos', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cranidos.png'},
    {name: 'Shieldon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/shieldon.png'},
    {name: 'Boldore', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/boldore.png'},
    {name: 'Gigalith', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gigalith.png'},
    {name: 'Roggenrola', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/roggenrola.png'},
    {name: 'Carracosta', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/carracosta.png'},
    {name: 'Tirtouga', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tirtouga.png'},
  ]
  squadraRoccia: {name:string; image:string} = {name: '', image: ''};

  pokemonPsico: {name:string, image:string}[] = [
    {name: 'Mew', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png'},
    {name: 'Alakazam', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/alakazam.png'},
    {name: 'Gardevoir', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gardevoir.png'},
    {name: 'Espeon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/espeon.png'},
    {name: 'Hypno', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hypno.png'},
    {name: 'Metagross', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/metagross.png'},
    {name: 'Slowbro', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/slowbro.png'},
    {name: 'Starmie', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/starmie.png'},
    {name: 'Jynx', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/jynx.png'},
    {name: 'Espeon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/espeon.png'},
    {name: 'Gothitelle', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gothitelle.png'},
    {name: 'Reuniclus', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/reuniclus.png'},
    {name: 'Malamar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/malamar.png'},
    {name: 'Sigilyph', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sigilyph.png'},
    {name: 'Musharna', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/musharna.png'},
  ]
  squadraPsico: {name:string; image:string} = {name: '', image: ''};

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

  pokemonGhiaccio: {name:string, image:string}[] = [
    {name: 'Articuno', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/articuno.png'},
    {name: 'Jynx', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/jynx.png'},
    {name: 'Lapras', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/lapras.png'},
    {name: 'Glaceon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/glaceon.png'},
    {name: 'Sneasel', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sneasel.png'},
    {name: 'Weavile', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/weavile.png'},
    {name: 'Snorunt', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/snorunt.png'},
    {name: 'Froslass', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/froslass.png'},
    {name: 'Spheal', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/spheal.png'},
    {name: 'Sealeo', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sealeo.png'},
    {name: 'Walrein', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/walrein.png'},
    {name: 'Cubchoo', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cubchoo.png'},
    {name: 'Beartic', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/beartic.png'},
    {name: 'Cryogonal', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cryogonal.png'},
    {name: 'Regice', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/regice.png'},
  ]
  squadraGhiaccio: {name:string; image:string} = {name: '', image: ''};

  pokemonErba: {name:string, image:string}[] = [
    {name: 'Bulbasaur', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png'},
    {name: 'Oddish', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/oddish.png'},
    {name: 'Bellsprout', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bellsprout.png'},
    {name: 'Exeggcute', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/exeggcute.png'},
    {name: 'Tangela', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tangela.png'},
    {name: 'Chikorita', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/chikorita.png'},
    {name: 'Treecko', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/treecko.png'},
    {name: 'Turtwig', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/turtwig.png'},
    {name: 'Snivy', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/snivy.png'},
    {name: 'Chespin', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/chespin.png'},
    {name: 'Rowlet', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rowlet.png'},
    {name: 'Grookey', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/grookey.png'},
    {name: 'Sprigatito', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sprigatito.png'},
    {name: 'Leafeon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/leafeon.png'},
    {name: 'Sceptile', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sceptile.png'},
  ]
  squadraErba: {name:string; image:string} = {name: '', image: ''};
  pokemonFuoco: {name:string, image:string}[] = [
    {name: 'Charizard', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png'},
    {name: 'Vulpix', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/vulpix.png'},
    {name: 'Magmar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/magmar.png'},
    {name: 'Flareon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/flareon.png'},
    {name: 'Growlithe', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/growlithe.png'},
    {name: 'Arcanine', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/arcanine.png'},
    {name: 'Cyndaquil', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/quilava.png'},
    {name: 'Rapidash', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rapidash.png'},
    {name: 'Houndoom', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/houndoom.png'},
    {name: 'Blaziken', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/blaziken.png'},
    {name: 'Torkoal', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/torkoal.png'},
    {name: 'Infernape', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/infernape.png'},
    {name: 'Emboar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/emboar.png'},
    {name: 'Delphox', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/delphox.png'},
    {name: 'Pyroar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pyroar.png'},
  ]
  squadraFuoco: {name:string; image:string} = {name: '', image: ''};
  pokemonElettro: {name:string, image:string}[] = [
    {name: 'Electrode', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/electrode.png'},
    {name: 'Pikachu', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png'},
    {name: 'Jolteon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/jolteon.png'},
    {name: 'Zapdos', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zapdos.png'},
    {name: 'Raichu', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png'},
    {name: 'Ampharos', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/ampharos.png'},
    {name: 'Magnezone', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/magnezone.png'},
    {name: 'Electivire', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/electivire.png'},
    {name: 'Rotom', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rotom.png'},
    {name: 'Zeraora', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zeraora.png'},
    {name: 'Togedemaru', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/togedemaru.png'},
    {name: 'Xurkitree', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/xurkitree.png'},
    {name: 'Eelektross', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/eelektross.png'},
    {name: 'Galvantula', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/galvantula.png'},
    {name: 'Luxray', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/luxray.png'},
  ]
  squadraElettro: {name:string; image:string} = {name: '', image: ''};
  pokemonColeottero: {name:string, image:string}[] = [
    {name: 'Scyther', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scyther.png'},
    {name: 'Heracross', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/heracross.png'},
    {name: 'Pinsir', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pinsir.png'},
    {name: 'Volbeat', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/volbeat.png'},
    {name: 'Illumise', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/illumise.png'},
    {name: 'Wurmple', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/wurmple.png'},
    {name: 'Beautifly', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/beautifly.png'},
    {name: 'Dustox', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dustox.png'},
    {name: 'Surskit', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/surskit.png'},
    {name: 'Masquerain', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/masquerain.png'},
    {name: 'Nincada', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/nincada.png'},
    {name: 'Ninjask', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/ninjask.png'},
    {name: 'Shedinja', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/shedinja.png'},
    {name: 'Volcarona', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/volcarona.png'},
    {name: 'Genesect', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/genesect.png'},
  ]
  squadraColeottero: {name:string; image:string} = {name: '', image: ''};

  pokemonBuio: {name:string, image:string}[] = [
    {name: 'Umbreon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/umbreon.png'},
    {name: 'Sableye', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sableye.png'},
    {name: 'Murkrow', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/murkrow.png'},
    {name: 'Spiritomb', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/spiritomb.png'},
    {name: 'Honchkrow', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/honchkrow.png'},
    {name: 'Darkrai', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/darkrai.png'},
    {name: 'Yveltal', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/yveltal.png'},
    {name: 'Zoroark', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zoroark.png'},
    {name: 'Cacturne', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cacturne.png'},
    {name: 'Weavile', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/weavile.png'},
    {name: 'Tyranitar', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tyranitar.png'},
    {name: 'Greninja', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/greninja.png'},
    {name: 'Bisharp', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bisharp.png'},
    {name: 'Hydreigon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hydreigon.png'},
    {name: 'Yamask', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/yamask.png'},
  ]
  squadraBuio: {name:string; image:string} = {name: '', image: ''};

  pokemonAcqua: {name:string, image:string}[] = [
    {name: 'Blastoise', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/blastoise.png'},
    {name: 'Squirtle', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png'},
    {name: 'Gyarados', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gyarados.png'},
    {name: 'Vaporeon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/vaporeon.png'},
    {name: 'Poliwag', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/poliwag.png'},
    {name: 'Poliwhirl', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/poliwhirl.png'},
    {name: 'Mudkip', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mudkip.png'},
    {name: 'Swampert', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/swampert.png'},
    {name: 'Lapras', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/lapras.png'},
    {name: 'Totodile', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/totodile.png'},
    {name: 'Feraligatr', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/feraligatr.png'},
    {name: 'Piplup', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/piplup.png'},
    {name: 'Empoleon', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/empoleon.png'},
    {name: 'Oshawott', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/oshawott.png'},
    {name: 'Samurott', image: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/samurott.png'},
  ]
  squadraAcqua: {name:string; image:string} = {name: '', image: ''};
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

  nomeAllenatore = ""
  nomeMesso = false

  ngOnInit(): void {
    if(localStorage.getItem('allenatore') === null){
      this.nomeMesso = false
    }else{
      this.nomeMesso = true
      this.nomeAllenatore = localStorage.getItem('allenatore')!;
    }


    if(localStorage.getItem('volante') === null){

    }else{
      let squadraVolanteName = localStorage.getItem('volante')!;
      for(let pokemon of this.pokemonVolante){
        if(pokemon.name === squadraVolanteName){
          this.squadraVolante = pokemon;
        }
      }
    }
    if(localStorage.getItem('veleno') === null){

    }else{
      let squadraVelenoName = localStorage.getItem('veleno')!;
      for(let pokemon of this.pokemonVeleno){
        if(pokemon.name === squadraVelenoName){
          this.squadraVeleno = pokemon;
        }
      }
    }
    if(localStorage.getItem('terra') === null){

    }else{
      let squadraTerraName = localStorage.getItem('terra')!;
      for(let pokemon of this.pokemonTerra){
        if(pokemon.name === squadraTerraName){
          this.squadraTerra = pokemon;
        }
      }
    }
    if(localStorage.getItem('roccia') === null){

    }else{
      let squadraRocciaName = localStorage.getItem('roccia')!;
      for(let pokemon of this.pokemonRoccia){
        if(pokemon.name === squadraRocciaName){
          this.squadraRoccia = pokemon;
        }
      }
    }
    if(localStorage.getItem('psico') === null){
    }else{
      let squadraPsicoName = localStorage.getItem('psico')!;
      for(let pokemon of this.pokemonPsico){
        if(pokemon.name === squadraPsicoName){
          this.squadraPsico = pokemon;
        }
      }
    }
    if(localStorage.getItem('lotta') === null){

    }else{
      let squadraLottaName = localStorage.getItem('lotta')!;
      for(let pokemon of this.pokemonLotta){
        if(pokemon.name === squadraLottaName){
          this.squadraLotta = pokemon;
        }
      }
    }
    if(localStorage.getItem('ghiaccio') === null){
    }else{
      let squadraGhiaccioName = localStorage.getItem('ghiaccio')!;
      for(let pokemon of this.pokemonGhiaccio){
        if(pokemon.name === squadraGhiaccioName){
          this.squadraGhiaccio = pokemon;
        }
      }
    }
    if(localStorage.getItem('erba') === null){
    }else{
      let squadraErbaName = localStorage.getItem('erba')!;
      for(let pokemon of this.pokemonErba){
        if(pokemon.name === squadraErbaName){
          this.squadraErba = pokemon;
        }
      }
    }
    if(localStorage.getItem('fuoco') === null){
    }else{
      let squadraFuocoName = localStorage.getItem('fuoco')!;
      for(let pokemon of this.pokemonFuoco){
        if(pokemon.name === squadraFuocoName){
          this.squadraFuoco = pokemon;
        }
      }
    }
    if(localStorage.getItem('elettro') === null){
    }else{
      let squadraElettroName = localStorage.getItem('elettro')!;
      for(let pokemon of this.pokemonElettro){
        if(pokemon.name === squadraElettroName){
          this.squadraElettro = pokemon;
        }
      }
    }
    if(localStorage.getItem('coleottero') === null){
    }else{
      let squadraColeotteroName = localStorage.getItem('coleottero')!;
      for(let pokemon of this.pokemonColeottero){
        if(pokemon.name === squadraColeotteroName){
          this.squadraColeottero = pokemon;
        }
      }
    }
    if(localStorage.getItem('buio') === null){
    }else{
      let squadraBuioName = localStorage.getItem('buio')!;
      for(let pokemon of this.pokemonBuio){
        if(pokemon.name === squadraBuioName){
          this.squadraBuio = pokemon;
        }
      }
    }
    if(localStorage.getItem('acqua') === null){
    }else{
      let squadraAcquaName = localStorage.getItem('acqua')!;
      for(let pokemon of this.pokemonAcqua){
        if(pokemon.name === squadraAcquaName){
          this.squadraAcqua = pokemon;
        }
      }
    }
    if(localStorage.getItem('acciaio') === null){
    }else{
      let squadraAcciaioName = localStorage.getItem('acciaio')!;
      for(let pokemon of this.pokemonAcciaio){
        if(pokemon.name === squadraAcciaioName){
          this.squadraAcciaio = pokemon;
        }
      }
    }


  }


  salvaNome(){
    localStorage.setItem('allenatore', this.nomeAllenatore);
    this.nomeMesso = true;
  }
}
