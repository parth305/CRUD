import { htmlTemplate, images } from "./const.js";
const div = document.createElement("div");
div.innerHTML = htmlTemplate;

div.classList.add("silder-box");

let divlist = [];
for (let i = 0; i < images.length; i++) {
  let temp = div.cloneNode(true);
  temp.getElementsByTagName("img")[0].src = images[i];
  divlist.push(temp);
}

let container = document.getElementById("dynamic-container");
let dotcontainer = document.getElementById("dotcontainer");
let dot = document.createElement("div");
dot.classList.add("dot");
for (const iterator of divlist) {
  container.appendChild(iterator);
}
for (let index = 0; index < images.length / 3; index++) {
  dotcontainer.appendChild(dot.cloneNode());
}

let position = 0;
let positionflag = false;
let activedot = 0;
let flag = true;
let dotchilds = dotcontainer.childNodes;
dotchilds[activedot].classList.toggle("active");
setInterval(() => {
  if (!flag) {
    return;
  }
  position -= 440 * 3;
  divlist.map((el) => {
    if (position <= -440 * images.length + 440 * 2) {
      position = 0;
    }
    el.style.transform = `translateX(${position}px)`;
  });

  dotchilds[activedot].classList.toggle("active");
  activedot = (activedot + 1) % 3;
  dotchilds[activedot].classList.toggle("active");
}, 3000);

container.addEventListener("mouseover", () => {
  flag = false;
});
container.addEventListener("mouseout", () => {
  flag = true;
});

for (let index = 0; index < dotchilds.length; index++) {
  const element = dotchilds[index];
  element.addEventListener("click", () => {
    dotchilds[activedot].classList.toggle("active");
    activedot = index;
    element.classList.toggle("active");
    position = activedot - index * 3 * 440;
    divlist.map((el) => {
      el.style.transform = `translateX(${position}px)`;
    });
  });
}
