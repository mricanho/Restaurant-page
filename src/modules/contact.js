import { createBox } from './helper';

const contact = {
  renderAreaId: 'body-cont',
  render: (location) => {
    createBox(location, "Corporate Information 450 North Brand Boulevard   Glendale , CA 91203 866-444-5144 M-F, 8:00am - 7:00pm CDT/CST", "./assets/images/contact.jpg")
  },
};

export { contact };