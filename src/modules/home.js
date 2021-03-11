import base from './base';
 
 const home = () => { 
  const bodyContainer = document.querySelector("div#body-cont");

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


 };

 export default home;