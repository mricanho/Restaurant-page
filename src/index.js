import home  from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';

const selectHome = () => {
  home();
  alert('hi');
};

const selectMenu = () => {

  alert("menu");
};

const selectContact = () => {

  alert('Contact');
};

const index = () => {
  const homeClick = document.querySelector("a#home");
  homeClick.addEventListener("click", selectHome);

  const menuClick = document.querySelector("a#menu");
  menuClick.addEventListener("click", selectMenu);
  
  const contactClick = document.querySelector("a#contact");
  contactClick.addEventListener("click", selectContact);
};

home();
index();
