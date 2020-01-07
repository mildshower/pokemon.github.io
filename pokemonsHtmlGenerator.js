const all = require('./pokemon.json');
const few = all.slice(0, 5);

console.log(`<div class="container">`);
all.forEach(pok => {
  console.log(
    `<div class="pokemon ${pok.types.join(' ')}">\n\t<h4>${
      pok.name
    }</h4>\n\t<img src="${pok.art_url}" alt="${pok.name}">\n</div>\n`
  );
});
console.log(`</div>`);
