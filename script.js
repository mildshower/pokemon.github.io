const filter = function(category) {
  highlight(category);
  const type = category.innerText.toLowerCase();
  const allPokemons = document.getElementsByClassName('pokemon');
  Array.from(allPokemons).forEach(pokBox => (pokBox.style.display = 'none'));
  const thisType = Array.from(allPokemons).filter(pokBox =>
    pokBox.className.includes(type)
  );
  Array.from(thisType).forEach(pokBox => (pokBox.style.display = 'block'));
};

const showAll = function(allTag) {
  highlight(allTag);
  const allPokemons = document.getElementsByClassName('pokemon');
  Array.from(allPokemons).forEach(pokBox => (pokBox.style.display = 'block'));
};

const highlight = function(menu) {
  const allMenuItems = document.getElementsByClassName('category');
  Array.from(allMenuItems).forEach(menuItem => {
    menuItem.style['font-weight'] = '200';
    menuItem.style.color = 'rgb(107, 107, 107)';
  });
  menu.style.color = 'rgb(63, 63, 63)';
  menu.style['font-weight'] = '800';
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
  detailSlide.innerHTML += `<p style="padding: 0 20vw">${description}</p>`;
  document.getElementsByClassName('detail')[0].style.width = '85%';
  // document.getElementsByTagName('body')[0].style.opacity = '0.5';
};

const closeNav = function() {
  document.getElementsByClassName('detail')[0].style.width = '0%';
  // document.getElementsByTagName('body')[0].style.opacity = '1';
};
