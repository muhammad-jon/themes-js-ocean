let buttons = document.querySelector(".buttons");
let items = document.querySelector(".carousel-items");

let currentSlide = 0;

let data = [
  {
    h1: "Kuzgi chegirma",
    h2: "60%",
    p: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius sequi. Optio,
    deleniti aut. Debitis consequuntur a impedit rem pariatur odit velit perspiciatis? Quas ipsa
    illo ullam, asperiores enim doloribus.`,
    bg: "https://i0.wp.com/www.therealalgarve.com/wp-content/uploads/2018/06/little-boy-and-girl-drinking-coconut-cocktail-on-tropical-resort-000071382149_Full.jpg?resize=1920%2C1080&ssl=1",
  },

  {
    h1: "Bahorgi chegirma",
    h2: "50%",
    p: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius sequi. Optio,
    deleniti aut. Debitis consequuntur a impedit rem pariatur odit velit perspiciatis? Quas ipsa
    illo ullam, asperiores enim doloribus.`,
    bg: "https://www.novascotia.com/sites/default/files/2021-04/Melmerby%20Beach%201920x1080.jpg",
  },
  {
    h1: "Qishgi chegirma",
    h2: "10%",
    p: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius sequi. Optio,
    deleniti aut. Debitis consequuntur a impedit rem pariatur odit velit perspiciatis? Quas ipsa
    illo ullam, asperiores enim doloribus.`,
    bg: "https://www.novascotia.com/sites/default/files/2023-04/Clam_Harbour-beach-jump-1920x1080.jpg",
  },
  {
    h1: "Yozgi chegirma",
    h2: "50%",
    p: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius sequi. Optio,
    deleniti aut. Debitis consequuntur a impedit rem pariatur odit velit perspiciatis? Quas ipsa
    illo ullam, asperiores enim doloribus.`,
    bg: "https://www.novascotia.com/sites/default/files/2019-05/SurfingatLawrencetown-1920x1080.jpg",
  },
];

for (let index = 0; index < data.length; index++) {
  let item = document.createElement("div");
  item.style.backgroundImage = `url(${data[index].bg})`;
  item.classList.add("carousel-item");
  item.innerHTML = `
            <h1>${data[index].h1}</h1>
            <h2>${data[index].h2}</h2>
            <p>${data[index].p}</p>
           `;
  items.appendChild(item);

  let button = document.createElement("span");
  button.classList.add("carousel-indicator-button");
  button.setAttribute("data-slide-to", index);

  button.textContent = index + 1;
  button.onclick = function () {
    let slideIndex = this.getAttribute("Data-Slide-To");
    currentInd(slideIndex);
    currentSlide = slideIndex;
  };
  buttons.appendChild(button);
}

left.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide == -1) {
    currentSlide = data.length - 1;
  }
  currentInd(currentSlide);
});
right.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide == data.length) {
    currentSlide = 0;
  }
  currentInd(currentSlide);
});

toSlide.addEventListener("keydown", function (event) {
  if (event.key <= data.length && event.key >= 1) {
    currentSlide = event.key - 1;
    currentInd(+event.key - 1);
  }
});

buttons.children[currentSlide].classList.add("current");

function currentInd(current) {
  items.style.transform = `translate(${current * -800}px)`;

  for (let index = 0; index < buttons.children.length; index++) {
    buttons.children[index].classList.remove("current");
  }

  buttons.children[current].classList.add("current");
}

setInterval(() => {
  currentInd(currentSlide);
  currentSlide++;
  if (currentSlide == data.length) {
    currentSlide = 0;
  }
}, 3000);
