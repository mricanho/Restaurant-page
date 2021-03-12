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

export { renderPage, createTab };