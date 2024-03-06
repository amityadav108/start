const subHeading = document.createElement("h3");
const subHeadingText = document.createTextNode("Buy high quality organic fruits online");
subHeading.style.fontStyle = "italic";

const divs = document.getElementsByTagName("div");
const firstDiv = divs[0];
firstDiv.appendChild(subHeading);

const para = document.createElement("p");
const paraText = document.createTextNode("total fruits: 4")
const secondDiv = divs[1];
const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(para,fruits);
para.id = "fruits-total";