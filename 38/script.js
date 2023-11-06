// let x = 0;
// let y = 0;

// let goX;

// snake.style.transition = "all 0.1s";

// document.addEventListener("keydown", (event) => {
//   console.log(event.key);

//   clearInterval(goX);

//   move(event);
//   goX = setInterval(() => {
//     move(event);
//   }, 300);
// });
// function move(event) {
//   if (event.key == "ArrowUp") {
//     y -= 10;
//     snake.style.translate = `${x}px ${y}px`;
//   }
//   if (event.key == "ArrowDown") {
//     y += 10;
//     snake.style.translate = `${x}px ${y}px`;
//   }
//   if (event.key == "ArrowRight") {
//     x += 10;
//     snake.style.translate = `${x}px ${y}px`;
//   }
//   if (event.key == "ArrowLeft") {
//     x -= 10;
//     snake.style.translate = `${x}px ${y}px`;
//   }
// }

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// console.log("before");
// const promise = new Promise((resolve, reject) => {
//   // amalni bajarish
//   const success = true; // yoki false
//   setTimeout(() => {
//     resolve("Ma'lumotlar olingan");
//   }, 2000);

//   if (success) {
//     // resolve("Ma'lumotlar olingan"); // agar muvaffaqiyatli bo'lsa
//   } else {
//     reject("Xatolik yuz berdi"); // agar xatolik yuzaga kelsa
//   }
// });

// promise
//   .then((data) => {
//     console.log(data); // amal muvaffaqiyatli tugaganda
//   })
//   .catch((error) => {
//     console.log(error); // amalda xatolik yuz berib qolsa
//   });

// console.log("after");

// const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "01be257534msh781515b212f94d6p1ebcacjsn9e7080983ffd",
//     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//   },
// };

// fetch(url, options)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data); // Yoki boshqa amallar olib ishlang
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // try {
// //   const response = await fetch(url, options);
// //   const result = await response.text();
// //   console.log(result);
// // } catch (error) {
// //   console.error(error);
// // }

// let url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//   .then((el) => el.json())
//   .then((ol) => console.log(ol));
