const openNav = function() {
  const navElement = document.getElementsByClassName('detail')[0];
  navElement.style.width = '45%';
};

const closeNav = function() {
  const navElement = document.getElementsByClassName('detail')[0];
  navElement.style.width = '0%';
};

window.onkeydown = function(){
  if(event.keyCode === 27) closeNav();
}

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

const getAllPokeBoxes = function() {
  const allPokemon = document.getElementsByClassName('pokemon');
  return Array.from(allPokemon);
}

const isAMatch = function(selectedType, searchKeyword, pokeBox) {
  const isSelectedType = pokeBox.className.includes(selectedType);
  const doesKeywordMatch = pokeBox.id.includes(searchKeyword.toLowerCase());
  return isSelectedType && doesKeywordMatch;
}

class PokeCollection {
  constructor() {
    this.currCategory = document.getElementById('all');
  }

  focusOnSelectedType(selectedCategoryElement){
    fade(this.currCategory);
    highlight(selectedCategoryElement);
  }

  filter(selectedCategoryElement) {
    this.focusOnSelectedType(selectedCategoryElement);
    const allPokeBoxes = getAllPokeBoxes();

    let type = selectedCategoryElement.innerText.toLowerCase();
    if (type === 'all') type = 'pokemon';
    const matcher = isAMatch.bind(null,type,searchBar.value);
    const matchedPokeBoxes = Array.from(allPokeBoxes.filter(matcher));

    allPokeBoxes.forEach(hide);
    matchedPokeBoxes.forEach(show);
    this.currCategory = selectedCategoryElement;
  }

  search() {
    this.filter(this.currCategory);
  };
}

const showCategoryPanel = function() {
  const categoryPanel = document.getElementsByClassName('categoryPanel')[0];
  categoryPanel.style.position = 'sticky';
}

const hideCategoryPanel = function() {
  const categoryPanel = document.getElementsByClassName('categoryPanel')[0];
  categoryPanel.style.position = 'static';
}

class ScrollListener {
  constructor(actionOnScrollUp, actionOnScrollDown) {
    this.bodyTop = 0;
    this.actionOnScrollUp = actionOnScrollUp;
    this.actionOnScrollDown = actionOnScrollDown;
  }

  listen() {
    const currBodyTop = document.body.getBoundingClientRect().top;
    if (currBodyTop > this.bodyTop) this.actionOnScrollUp();
    else this.actionOnScrollDown();
    this.bodyTop = currBodyTop;
  }
}

const structureDetails = function(name, imgSrc, description) {
  let htmlContent = `<a id="closeBtn" onclick="closeNav()">close</a>`;
  htmlContent += `<h1>${name}</h1>`;
  htmlContent += `<img src="${imgSrc}"></img>`;
  htmlContent += `<p style="padding: 0 8vw">${description}</p>`;
  return htmlContent;
}

const writeOnDetailSlide = function(pokBox) {
  const imgSrc = pokBox.childNodes[3].src;
  const description = pokBox.childNodes[5].innerText;
  const name = pokBox.childNodes[1].innerText;
  const detailSlide = document.getElementsByClassName('detail')[0];
  detailSlide.innerHTML = structureDetails(name, imgSrc, description);
};

const pokeCollection = new PokeCollection();
const scrollListener = new ScrollListener(showCategoryPanel, hideCategoryPanel);
window.onscroll = () => scrollListener.listen();