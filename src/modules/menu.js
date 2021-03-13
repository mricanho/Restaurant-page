import { createBox } from './helper';

const menu = {
  renderAreaId: 'body-cont',
  render: (location) => {
    createBox(location, 'World-Famous Buttermilk Pancakes & Crepes', './assets/images/menu.jpg');
  },
};

export default menu;