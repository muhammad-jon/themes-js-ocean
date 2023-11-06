// console.log(document);
// let card = document.getElementById("card1");
// let cards = document.getElementsByClassName("card");

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
//   cards[i].textContent = "Bu div" + i;
// }

// // card.textContent = "Bu boshi";
// card.style.color = "red";
// // document.querySelector("body");

// let bl = document.getElementById("block");

// // console.log(bl.innerText);

// //InnerHTMl
// /////////////////////////////////////

// bl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
// <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
// </svg>`;

// // innerText/// textContent
// ////////////////////////////////////

// console.log(bl.innerText);
// console.log(bl.textContent);

// console.log(document.body);

// let ul = document.querySelector("ul");

// console.log(ul.previousSibling.previousSibling);
// for (let index = 0; index < ul.childNodes.length; index++) {
//   console.log(ul.childNodes[index]);
// }

// let hours = new Date();

// console.log(hours.getHours());
// if (
//   (hours.getHours() >= 13 && hours.getHours() <= 24) ||
//   hours.getHours() < 6
// ) {
//   console.log("here");
//   document.body.classList.add("darkTheme");
// }

// change.addEventListener("click", () => {
//   document.body.classList.toggle("darkTheme");
// });

//////////// mouse events

// btn.addEventListener("click", () => {
//   console.log("bosildi");
// });

// btn.addEventListener("mousedown", () => {
//   console.log("bosib turilibdi");
//   btn.style.background = "red";
// });

// btn.addEventListener("mouseup", () => {
//   console.log("ko'tarildi");
//   btn.style.background = "green";
// });

// btn.addEventListener("mouseenter", () => {
//   console.log("Hover qilindi");
//   btn.style.background = "green";
// });

// btn.addEventListener("mouseleave", () => {
//   console.log("unHover qilindi");
//   btn.style.background = "yellow";
// });

// btn.addEventListener("dblclick", () => {
//   console.log("ikki bosildi");
//   btn.style.background = "yellow";
// });

// btn.addEventListener("mousemove", (event) => {
//   console.log(event.clientX, event.clientY);
//   btn.style.background = "yellow";
// });
// btn.addEventListener("mouseover", (event) => {
//   console.log(event.clientX, event.clientY);
//   btn.style.background = "yellow";
// });

let btn = document.getElementById("#btn");

function changeSerif() {
  let all = document.querySelectorAll("*");
  for (let index = 0; index < all.length; index++) {
    all[index].style.fontFamily = "Lora, serif";
  }
}

function changeSansSerif() {
  let all = document.querySelectorAll("*");
  for (let index = 0; index < all.length; index++) {
    all[index].style.fontFamily = "Inter, serif";
  }
}

if (value == "serif") {
  changeSansSerif();
}

if (value == "sans-serif") {
  changeSansSerif();
}
