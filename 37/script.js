// let time = document.querySelector("#time");
// let start = document.querySelector("#start");
// let pause = document.querySelector("#pause");
// let reset = document.querySelector("#reset");

// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let milliseconds = 0;

// let intervalID;

// function setSeconds() {
//   if (milliseconds == 100) {
//     seconds++;
//     milliseconds = 0;
//   }
//   if (seconds == 60) {
//     seconds = 0;
//     minutes++;
//   }
//   if (minutes == 60) {
//     minutes = 0;
//     hours++;
//   }
//   time.innerText =
//     hours +
//     ":" +
//     Math.floor(minutes / 10) +
//     "" +
//     (minutes % 10) +
//     ":" +
//     Math.floor(seconds / 10) +
//     "" +
//     (seconds % 10) +
//     ":" +
//     Math.floor(milliseconds / 10) +
//     "" +
//     (milliseconds % 10);
//   milliseconds++;

// }

// start.addEventListener("click", () => {
//   intervalID = setInterval(setSeconds, 10);
//   start.setAttribute("disabled", true);
//   pause.removeAttribute("disabled");
//   console.log(intervalID);
// });

// pause.addEventListener("click", () => {
//   clearInterval(intervalID);
//   start.removeAttribute("disabled");
//   pause.setAttribute("disabled", true);
// });

// clear.addEventListener("click", () => {
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
//   milliseconds = 0;
//   setSeconds();
// });

// setSeconds();

// input.addEventListener("keydown", (event) => {
//   if (event.key == "Enter") {
//     fetch(`http://worldtimeapi.org/api/timezone/Asia/${input.value}`)
//       .then((response) => response.text())
//       .then((data) => {
//         console.log(data);
//         time.innerHTML = data.datetime;
//       });
//   }
// });

let root = document.querySelector("#root");
// html filedagi div#root elementni olish

let btn = document.createElement("button");
// btn o'zgaruvchisiga <button> elementini yaratib o'zlashtirish

btn.style.background = "red";
// btn o'zgaruvchili elementga backgroundini qizil qilish

btn.textContent = "Click me";
// <button> ga "Click me " matnini yozish
// <button>Click me</button>

root.appendChild(btn);
// root nomli divga buttonni qo'shish
