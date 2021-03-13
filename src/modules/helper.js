function renderPage(page) {
  return () => {
    const renderArea = document.getElementById(page.renderAreaId);
    renderArea.innerHTML = '';
    page.render(renderArea);
  };
}

const createTab = (name) => {
  const tab = document.createElement('a');
  const navbarEnd = document.getElementById('here-tab');
  tab.setAttribute('id', `${name.toLowerCase()}Tab`);
  tab.className = 'navbar-item';
  tab.textContent = name;
  navbarEnd.appendChild(tab);
}

const createBox = (location, text, link) => {
  const box = document.createElement('div');
  box.setAttribute('class', 'box px-6');
  location.appendChild(box);

  const card = document.createElement('div');
  card.setAttribute('class', 'card mx-6 px-6');
  box.appendChild(card);

  const cardImg = document.createElement('div');
  cardImg.setAttribute('class', 'card-image');
  card.appendChild(cardImg);

  const figure = document.createElement('figure');
  figure.setAttribute('class', 'image is-4by3');
  cardImg.appendChild(figure);

  const image = document.createElement('img');
  image.setAttribute('src', link);
  image.setAttribute('alt', 'image-element');
  figure.appendChild(image);

  const cardCont = document.createElement('div');
  cardCont.setAttribute('class', 'card-content');
  card.appendChild(cardCont);

  const contentCard = document.createElement('div');
  contentCard.setAttribute('class', 'content');
  contentCard.innerHTML = text;
  cardCont.appendChild(contentCard);
}

export { renderPage, createTab, createBox };