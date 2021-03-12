import { base } from './modules/base';
import { home } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import { renderPage } from './modules/helper';

base();
renderPage(home)();

const tabs = [
  { id: 'homeTab', render: renderPage(home) },
  { id: 'menuTab', render: renderPage(menu) },
  { id: 'contactTab', render: renderPage(contact) },
];

tabs.forEach(tab => {
  const tabButton = document.getElementById(tab.id);
  tabButton.addEventListener('click', tab.render);
});