const all = require('./pokemon.json');
const few = all.slice(0, 5);

const types = {
  bug: ['Bugs', '146,217,57'],
  dragon: ['Dragon', '0,67,164'],
  electric: ['Electric', '255,255,0'],
  fairy: ['Fairy', '255,131,255'],
  fighting: ['Fighting', '146,57,77'],
  fire: ['Fire', '220,138,0'],
  flying: ['Flying', '102,169,233'],
  ghost: ['Ghost', '77,77,164'],
  grass: ['Grass', '0,170,0'],
  ground: ['Ground', '159,95,0'],
  ice: ['Ice', '159,212,210'],
  normal: ['Normal', '179,179,179'],
  poison: ['Poison', '120,0,164'],
  psychic: ['Psychic', '243,85,115'],
  rock: ['Rock', '133,125,80'],
  steel: ['Steel', '23,125,138'],
  water: ['Water', '23,125,220']
};

let details = '';
all.forEach(pok => {
  details += `<div class="pokemon ${pok.types.join(' ')}">\n`;
  details += `\t<h4>${pok.name}</h4>\n`;
  details += `\t<img src="${pok.art_url}" alt="${pok.name}">\n`;
  details += `\t<div class="typesContainer">\n`;
  pok.types.forEach(type => {
    details += `\t\t<div class="type">\n`;
    details += `\t\t\t<div style="background: rgb(${types[type][1]});"></div>\n`;
    details += `\t\t\t<span>${types[type][0]}</span>\n`;
    details += `\t\t</div>\n`;
  });
  details += `\t</div>\n`;
  details += `</div>\n`;
});

console.log(`<div class="container">`);
console.log(details);
console.log(`</div>`);
