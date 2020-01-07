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
