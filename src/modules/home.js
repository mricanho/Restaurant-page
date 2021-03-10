 const home = () => { 
  const content = document.querySelector("div#content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.setAttribute("class", "hero is-info is-large");

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
  menuHero.appendChild(navbarEnd);

  const tab1 = document.createElement("a");
  tab1.setAttribute("class", "navbar-item");
  tab1.setAttribute("id", "home");
  tab1.innerHTML = "Home";
  navbarEnd.appendChild(tab1);

  const tab2 = document.createElement("a");
  tab2.setAttribute("class", "navbar-item");
  tab2.setAttribute("id", "menu");
  tab2.innerHTML = "Menu";
  navbarEnd.appendChild(tab2);

  const tab3 = document.createElement("a");
  tab3.setAttribute("class", "navbar-item");
  tab3.setAttribute("id", "contact");
  tab3.innerHTML = "Contact";
  navbarEnd.appendChild(tab3);

  const heroBody = document.createElement("div");
  heroBody.setAttribute("class", "hero-body py-6");
  section.appendChild(heroBody);

  const bodyContainer = document.createElement("div");
  bodyContainer.setAttribute("class", "container has-text-centered");
  heroBody.appendChild(bodyContainer);

  const title = document.createElement("p");
  title.setAttribute("class", "title mb-6");
  title.innerHTML = "ALL THE PANCAKES YOU CAN EAT";
  bodyContainer.appendChild(title);

  const tileA = document.createElement("figure");
  tileA.setAttribute("class", "image is-5by3");
  bodyContainer.appendChild(tileA);

  const tileV = document.createElement("img");
  tileV.setAttribute("class", "pancakes");
  tileV.setAttribute("src", "./assets/images/stack.png");
  tileA.appendChild(tileV);

  content.appendChild(section);
 };

 export default home;