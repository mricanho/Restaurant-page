function renderPage(page) {
  return () => {
    const renderArea = document.getElementById(page.renderAreaId);
    renderArea.innerHTML = '';
    page.render(renderArea);
  };
}

function createTab(name) {
  const tab = document.createElement('a');
  const navbarEnd = document.getElementById("here-tab")
  tab.setAttribute('id', `${name.toLowerCase()}Tab`);
  tab.className = 'navbar-item';
  tab.textContent = name;
  navbarEnd.appendChild(tab);
}

function createBox(location, text) {
  const box = document.createElement('div');
  box.setAttribute("class", "box");
  location.appendChild(box);

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  box.appendChild(card);

  const cardCont = document.createElement("div");
  cardCont.setAttribute("class", "card-content");
  card.appendChild(cardCont);

  const contentCard = document.createElement("div");
  contentCard.setAttribute("class", "content")
  contentCard.innerHTML = text;
  cardCont.appendChild(contentCard);

}

export { renderPage, createTab, createBox };