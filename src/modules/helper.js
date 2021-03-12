function createList(location, title, ...args) {
  location.textContent = title;
  const list = document.createElement('ul');
  [...args].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
  location.appendChild(list);
}

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

export { createList, renderPage, createTab };