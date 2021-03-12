import { createBox } from './helper';

const contact = {
  renderAreaId: 'body-cont',
  render: (location) => {
    createBox(location, 'Contact me')
  },
};

export { contact };