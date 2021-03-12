function renderPage(page) {
  return () => {
    const renderArea = document.getElementById(page.renderAreaId);
    renderArea.innerHTML = '';
    page.render(renderArea);
  };
}

export { renderPage };