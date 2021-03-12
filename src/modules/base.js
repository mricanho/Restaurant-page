import { createTab } from "./helper";

const base = () => {
  const content = document.querySelector("div#content");
  const section = document.createElement("section");

  function nav() {
    const heroHead = document.createElement("div");
  heroHead.setAttribute("class", "hero-head");
  section.appendChild(heroHead);

  const navbar = document.createElement("nav");
  navbar.setAttribute("class", "navbar");
  heroHead.appendChild(navbar);

  const container = document.createElement("div");
  container.setAttribute("class", "container");
  navbar.appendChild(container);

  const navbarBrand = document.createElement("div");
  navbarBrand.setAttribute("class", "navbar-brand");
  container.appendChild(navbarBrand);

  const navbarItem = document.createElement("a");
  navbarItem.setAttribute("class", "navbar-item");
  navbarBrand.appendChild(navbarItem);

  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "./assets/images/ihop.png");
  logoImg.setAttribute("alt", "ihop logo");
  navbarItem.appendChild(logoImg);

  const menuHero = document.createElement("div");
  menuHero.setAttribute("class", "navbar-menu");
  menuHero.setAttribute("id", "navbarMenuHeroB");
  container.appendChild(menuHero);

  const navbarEnd = document.createElement("div");
  navbarEnd.setAttribute("class", "navbar-end");
  navbarEnd.setAttribute("id", "here-tab");
  menuHero.appendChild(navbarEnd);

  }

  function addSection() {
    section.setAttribute("class", "hero is-info is-large");
    content.appendChild(section);
  }

  function bodyContainer() {
    const heroBody = document.createElement("div");
    heroBody.setAttribute("class", "hero-body py-6");
    section.appendChild(heroBody);

    const bodyContainer = document.createElement("div");
    bodyContainer.setAttribute("class", "container has-text-centered");
    bodyContainer.setAttribute("id", "body-cont");
    heroBody.appendChild(bodyContainer);

    const title = document.createElement("p");
    title.setAttribute("class", "title mb-6");
    title.innerHTML = "ALL THE PANCAKES YOU CAN EAT";
    bodyContainer.appendChild(title);

    const tileA = document.createElement("figure");
    tileA.setAttribute("class", "image is-5by3");
    tileA.setAttribute("id", "here-img");
    bodyContainer.appendChild(tileA);
  }
  
  nav();
  addSection();
  bodyContainer();

  ["Home", "Menu", "Contact"].forEach(tab => createTab(tab));
};

export { base }