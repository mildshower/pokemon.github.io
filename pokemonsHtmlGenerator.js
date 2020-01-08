const all = require('./pokemon.json');
const few = all.slice(0, 5);

let details = '';
all.forEach(pok => {
  details += `<div onmouseover="writeOnDetailSlide(this)" onclick="openNav(this)" class="pokemon ${pok.types.join(
    ' '
  )}" id="${pok.name.toLowerCase()}">\n`;
  details += `\t<h4>${pok.name}</h4>\n`;
  details += `\t<img src="${pok.art_url}" alt="${pok.name}">\n`;
  details += `\t<p>${pok.description}</p>\n`;
  details += `\t<div class="typesContainer">\n`;
  pok.types.forEach(type => {
    details += `\t\t<div class="type">\n`;
    details += `\t\t\t<img src="./Image/${type}.png" class="typeImg"></img>\n`;
    details += `\t\t\t<span>${type[0].toUpperCase() + type.slice(1)}</span>\n`;
    details += `\t\t</div>\n`;
  });
  details += `\t</div>\n`;
  details += `</div>\n`;
});

console.log(`<div class="container">`);
console.log(details);
console.log(`</div>`);
