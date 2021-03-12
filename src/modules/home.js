import { createBox } from './helper';

const home = {
  renderAreaId: 'body-cont',
  render: (location) => {
    createBox(location, "ALL THE PANCAKES YOU CAN EAT", "./assets/images/stack.png")
  },
};

 export { home };