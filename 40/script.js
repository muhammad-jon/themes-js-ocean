let btn = document.createElement("button");
btn.textContent = "Click me";

root.appendChild(btn);

// function foo(name) {
//   console.log(name + " Salom");
// }

// btn.addEventListener("click", (event) => {
//   console.log(event);
// });

// btn.onclick = function () {
//   console.log("hello");
// };

// btn.addEventListener("mousedown", () => {
//   document.body.style.background = "black";
// });

// btn.addEventListener("mouseup", () => {
//   document.body.style.background = "white";
// });

// btn.addEventListener("mouseenter", (event) => {
//   console.log(event.clientX, event.clientY);
//   btn.style.background = "red";
// });
// btn.addEventListener("mouseleave", (event) => {
//   console.log(event.clientX, event.clientY);
//   btn.style.background = "green";
// });

// btn.addEventListener("mouseout", (event) => {
//   console.log(event.clientX, event.clientY);
//   //   btn.style.background = "red";
// });

// let header = document.createElement("h1");
// header.textContent = "Lorem ipsum dilo";
// root.appendChild(header);

//mouseenter, mouseover, mousemove, mouseout, mouseleave, click, dblclick,

btn.addEventListener("dblclick", () => {
  header.classList.toggle("dNone"); // bor bo'lsa o'chirish, bo'lmasa qo'shish
  //   header.classList.add("dNone"); // qo'shish
  //   header.classList.remove("dNone"); // o'chirish
});
