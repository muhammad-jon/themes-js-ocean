// let maydon = document.querySelector(".maydon");
// let ball = document.querySelector(".ball");

// maydon.onmousemove = function (event) {
//   //   console.log(window.event);
//   console.log("x", event.clientX);
//   console.log("y", event.clientY);
//   //   console.log(ball);

//   ball.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
// ball.style.transition = "all 0.2s";
// };

// burger;
// slider-carousel
// show or hide
// //

// document
//   .querySelector("input")
//   .addEventListener("keydown", function pressed(event) {
//     console.log(event.key);
//   });

let currentSlide = 0;
let items = document.querySelectorAll(".carousel-item");
carousel_items.style.transition = "all 0.4s";

left.addEventListener("click", function () {
  currentSlide--;
  console.log(currentSlide);
  if (currentSlide === -1) currentSlide = items.length - 1;
  carousel_items.style.transform = `translate(-${currentSlide * 500}px)`;
});
right.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide === items.length) currentSlide = 0;
  carousel_items.style.transform = `translate(-${currentSlide * 500}px)`;
});

for (let index = 0; index < 6; index++) {
  let li = document.createElement("li");
  li.innerHTML = `<li id="todo${index}"> Todo ${index}</li>`;
  document.body.appendChild(li);
}
