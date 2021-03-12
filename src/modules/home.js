 const home = {
  renderAreaId: 'here-img',
  render: (location) => {  
    const tileV = document.createElement("img");
    tileV.src = "./assets/images/stack.png";
    location.textContent = "all the you can eat";
    location.appendChild(tileV);
  },
 };

 export { home };