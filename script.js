let currCategory = document.getElementById('all');
const fade = element => {
  element.style['font-weight'] = '200';
  element.style.color = 'rgb(107, 107, 107)';
};
const highlight = function(element) {
  element.style.color = 'rgb(63, 63, 63)';
  element.style['font-weight'] = '800';
};

const show = element => (element.style.display = 'block');
const hide = element => (element.style.display = 'none');

const filter = function(categoryElement) {
  Array.from(document.getElementsByClassName('category')).forEach(fade);
  [categoryElement].forEach(highlight);

  let type = categoryElement.innerText.toLowerCase();
  if (type === 'all') type = 'pokemon';
  const allPokemon = document.getElementsByClassName('pokemon');
  const pokemonElements = Array.from(allPokemon);
  pokemonElements.forEach(hide);
  const thisType = pokemonElements.filter(
    pokBox =>
      pokBox.className.includes(type) &&
      pokBox.id.includes(searchBar.value.toLowerCase())
  );
  Array.from(thisType).forEach(show);
  currCategory = categoryElement;
};

const openNav = function(pokBox) {
  console.log(pokBox.childNodes);
  const img = pokBox.childNodes[3].src;
  const description = pokBox.childNodes[5].innerText;
  const name = pokBox.childNodes[1].innerText;
  const detailSlide = document.getElementsByClassName('detail')[0];
  detailSlide.innerHTML = `<a id="closeBtn" onclick="closeNav()">close</a>`;
  detailSlide.innerHTML += `<h1>${name}</h1>`;
  detailSlide.innerHTML += `<img src="${img}"></img>`;
  detailSlide.innerHTML += `<p style="padding: 0 8vw">${description}</p>`;
  document.getElementsByClassName('detail')[0].style.width = '45%';
  // document.getElementsByTagName('body')[0].style.opacity = '0.5';
};

const closeNav = function() {
  document.getElementsByClassName('detail')[0].style.width = '0%';
  // document.getElementsByTagName('body')[0].style.opacity = '1';
};

const search = function() {
  filter(currCategory);
};

let bodyTop = 0;
window.onscroll = function() {
  const top = document.body.getBoundingClientRect().top;
  if (top > bodyTop) {
    document.getElementsByClassName('categoryPanel')[0].style.position =
      'sticky';
    console.log('up');
  } else {
    document.getElementsByClassName('categoryPanel')[0].style.position =
      'static';
    console.log('down');
  }
  bodyTop = top;
};
