// function foo(show) {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((promise) => promise.json())
//     .then((data) => show(data));
// }

// function showConsole(data) {
//   console.log(data);
// }

// console.log("boshlandi");

// // foo(showConsole);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((promise) => promise.json())
//   .then((data) => {
//     console.log("Ma'lumot keldi");
//     // foo(tamom);
//   });

// // function tamom() {
// console.log("Tugadi");
// // }

// function myDisplayer(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 5;

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// console.log("begin");

// const myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("Muvofaqqiyatli qaytdi");
//   }, 1000);
// });

// myPromise.then(function (value) {
//   console.log(value);
//   console.log("end");
// });

// console.log(
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response;
//     })
//     .then((people) => {
//       return people;
//     })
// );

// const promise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Ma'lumotlar olingan"); // agar muvaffaqiyatli bo'lsa
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

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve, reject) {
//     resolve("Done");
//   });
//   console.log(await myPromise);
// }

// myDisplay();

// async function fetchMovies() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");

//   console.log(response.ok);
//   console.log(response.status);

//   const data = await response.json();
//   return data;
// }

// fetchMovies().then((data) => {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// });

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const url = "https://url-shortener-service.p.rapidapi.com/shorten";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "01be257534msh781515b212f94d6p1ebcacjsn9e7080983ffd",
    "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
  },
  body: new URLSearchParams({
    url: "https://google.com/",
  }),
};
async function foo() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.result_url);
  } catch (error) {
    console.error(error);
  }
}

foo();
