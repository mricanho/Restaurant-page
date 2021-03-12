import { base } from './modules/base';
import { home }  from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';
import { renderPage } from './modules/helper';

base();
renderPage(home)();
