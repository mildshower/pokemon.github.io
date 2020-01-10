const getAllPokeBoxes = function() {
  const allPokeBoxes = document.getElementsByClassName('pokemon');
  return Array.from(allPokeBoxes);
};

const getAboutSection = () => document.getElementsByClassName('detail')[0];

const getCategoryPanel = () =>
  document.getElementsByClassName('categoryPanel')[0];

const getAllCategoryElements = () => {
  const allCategoryElements = document.getElementsByClassName('category');
  return Array.from(allCategoryElements);
};

const getSearchBar = () => document.getElementById('searchBar');

const openAboutSection = function() {
  const navElement = getAboutSection();
  navElement.style.width = '45%';
};

const closeAboutSection = function() {
  const navElement = getAboutSection();
  navElement.style.width = '0%';
};

const doesPokeBoxMatch = function(selectedType, searchKeyword, pokeBox) {
  const isSelectedType = pokeBox.className.includes(selectedType);
  const doesKeywordMatch = pokeBox.id.includes(searchKeyword.toLowerCase());
  return isSelectedType && doesKeywordMatch;
};

class PokeCollection {
  constructor() {
    this.currCategory = document.getElementsByClassName('highlighted')[0];
    this.searchKeyword = '';
  }

  focusOnSelectedType(selectedCategoryElement) {
    this.currCategory.classList.remove('highlighted');
    selectedCategoryElement.classList.add('highlighted');
  }

  filter() {
    let type = this.currCategory.innerText.toLowerCase();
    if (type === 'all') type = 'pokemon';

    const allPokeBoxes = getAllPokeBoxes();
    const matcher = doesPokeBoxMatch.bind(null, type, searchBar.value);
    const matchedPokeBoxes = Array.from(allPokeBoxes.filter(matcher));
    allPokeBoxes.forEach(element => element.classList.add('hidden'));
    matchedPokeBoxes.forEach(element => element.classList.remove('hidden'));
  }

  filterByCategory(selectedCategoryElement) {
    this.focusOnSelectedType(selectedCategoryElement);
    this.currCategory = selectedCategoryElement;
    this.filter();
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.filter();
  }
}
class handleScroll {
  constructor(actionOnScrollUp, actionOnScrollDown) {
    this.bodyTop = 0;
    this.actionOnScrollUp = actionOnScrollUp;
    this.actionOnScrollDown = actionOnScrollDown;
  }

  act() {
    const currBodyTop = document.body.getBoundingClientRect().top;
    if (currBodyTop > this.bodyTop) this.actionOnScrollUp();
    else this.actionOnScrollDown();
    this.bodyTop = currBodyTop;
  }
}

const showCategoryPanel = function() {
  const categoryPanel = getCategoryPanel();
  categoryPanel.style.position = 'sticky';
};

const hideCategoryPanel = function() {
  const categoryPanel = getCategoryPanel();
  categoryPanel.style.position = 'static';
};

const generateAboutDiv = function(name, imgSrc, description) {
  let htmlContent = `<div>
    <a id="closeBtn" onclick="closeAboutSection()">close</a>
    <h1>${name}</h1>
    <img src="${imgSrc}"></img>
    <p style="padding: 0 8vw">${description}</p>
   </div>`;
  return htmlContent;
};

const writeOnAboutSection = function(pokBox) {
  const imgSrc = pokBox.childNodes[3].src;
  const description = pokBox.childNodes[5].innerText;
  const name = pokBox.childNodes[1].innerText;
  const aboutSection = getAboutSection();
  aboutSection.innerHTML = generateAboutDiv(name, imgSrc, description);
};

const hookCategoryListeners = function(pokeCollection) {
  const allCategoryElements = getAllCategoryElements();
  allCategoryElements.forEach(
    element =>
      (element.onclick = () => pokeCollection.filterByCategory(element))
  );
};

const hookPokeBoxListeners = function() {
  const allPokeBoxes = getAllPokeBoxes();
  allPokeBoxes.forEach(pokeBox => {
    pokeBox.onmouseover = writeOnAboutSection.bind(null, pokeBox);
    pokeBox.onclick = openAboutSection;
  });
};

const hookWindowListeners = function(scrollHandler) {
  window.onscroll = () => scrollHandler.act();
  window.onkeydown = function() {
    if (event.keyCode === 27) closeAboutSection();
  };
};

const hookSearchListener = function(pokeCollection) {
  const searchBar = getSearchBar();
  searchBar.oninput = () => pokeCollection.search(searchBar.value);
};

const main = function() {
  const scrollHandler = new handleScroll(showCategoryPanel, hideCategoryPanel);
  const pokeCollection = new PokeCollection();
  hookCategoryListeners(pokeCollection);
  hookSearchListener(pokeCollection);
  hookWindowListeners(scrollHandler);
  hookPokeBoxListeners();
};
