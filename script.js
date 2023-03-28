let div = document.createElement("div");
div.innerHTML = `
              <img
                src="images/car-png-39057.png"
                alt=""
                class="slider-box-img"
              />
              <div class="slider-box-content">
                <h4>Lorem, ipsum.</h4>
                <div class="product-info">
                  <div class="buynow">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.707,3.293C13.52,3.105,13.266,3,13,3H4C3.447,3,3,3.447,3,4v9c0,0.266,0.105,0.52,0.293,0.707l8,8 C11.488,21.902,11.744,22,12,22s0.512-0.098,0.707-0.293l9-9c0.391-0.391,0.391-1.023,0-1.414L13.707,3.293z M12,19.586l-7-7V5 h7.586l7,7L12,19.586z"
                      ></path>
                      <circle cx="8.496" cy="8.495" r="1.505"></circle>
                    </svg>
                  </div>
                  <div class="price">$9999</div>
                  <div class="viewdetails">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>   
`;

div.classList.add("silder-box");

let images = [
  "images/car-png-39057.png",
  "images/car-png-39071.png",
  "images/chris-barbalis-9qlSGW_LgKs-unsplash.jpg",
  "images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg",
  "images/erik-mclean-54WyjJurNN8-unsplash.jpg",
  "images/kevin-bhagat-3cLpiv8h5so-unsplash.jpg",
  "images/pexels-abdulwahab-alawadhi-3422964.jpg",
  "images/thomas-sabu-pvaA12P-6s4-unsplash.jpg",
  "images/tim-meyer-GIm7wxiAZys-unsplash.jpg",
];

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
// console.time("timer")
let positionflag = false;
let activedot = 0;
let flag = true;
let dotchilds = dotcontainer.childNodes;
dotchilds[activedot].classList.toggle("active");
setInterval(() => {
  // console.timeLog("timer")
  if (!flag) {
    return;
  }
position-=440*3
  divlist.map((el) => {
    if (position <= -440 * images.length + 440 * 2) {
      position = 0;
    }
    el.style.transform = `translateX(${position}px)`;
  });

  dotchilds[activedot].classList.toggle("active");
  activedot = (activedot + 1) % 3;
  console.log(activedot);
  dotchilds[activedot].classList.toggle("active");
}, 5000);

container.addEventListener("mouseover", () => {
  flag = false;
});
container.addEventListener("mouseout", () => {
  flag = true;
});

for (let index = 0; index < dotchilds.length; index++) {
  const element = dotchilds[index];
  element.addEventListener("click", () => {
    dotchilds[activedot].classList.toggle('active')
    activedot=index
    element.classList.toggle("active")
    position = activedot - index * 3 * 440;
    divlist.map((el) => {
      el.style.transform = `translateX(${position}px)`;
    });
  });
}
