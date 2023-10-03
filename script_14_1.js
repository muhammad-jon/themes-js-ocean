// let user1 = new Object(); // "object constructor" syntax
// let user2 = {}; // "object literal" syntax

// let newArr = new Array();
// let newArr2 = [];

// let user = {
//   // an object
//   name: "John", // by key "name" store value "John"
//   age: 30, // by key "age" store value 30
//   city: "Termiz",
//   "likes birds": "Ha yaxshi ko'radi",
// };

// user.isAdmin = true;
// user.isManager = true;
// user.salary = 8000000;

// // delete user.age;

// let a = prompt("User haqida nima ma'lumot o'zgartirmqochisiz: ");
// let qiymati = prompt("Qiymati: ");

// user[a] = qiymati;

// console.log(user);

// function makeUser(name, age, isAdmin) {
//   return {
//     name,
//     age,
//     isAdmin,
//     12: 45,
//   };
// }

// let user = makeUser("John", 30, true);
// let user2 = makeUser("BRo", 10, false);
// let user3 = makeUser("Bratish", 19, true);

// console.log("age" in user); // John
// console.log(user2.name); // John
// console.log(user3.name); // John

// let user = { name: "John", age: 16 };

// // console.log(user.age); // true, user.age exists
// if ("age" in user) {
//   user.age += 1;
// } else {
//   user.age = 0;
// }
// console.log(user.age); // false, user.blabla doesn't exist

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);
// for (let i in user) {
//   //   console.log(key); // name, age, isAdmin
//   console.log(user[i]); // John, 30, true
// }

// // for(let i=0; i<5; i++){

// // }

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// // for (let code in codes) {
// //   console.log(code); // 1, 41, 44, 49
// // }

// let obj = new Object();
// let obj2 = new Object();

// console.log(obj);
// console.log(obj2);

// console.log(obj2 === obj);

// function centeredAverage(nums) {
//   let mas = nums.sort((a, b) => a - b);
//   //   mas.pop();
//   //   mas.shift();
//   return nums.slice(1, nums.length - 2).reduse((a, b) => a + b) / mas.length;
// }

// let a = centeredAverage([1, 1, 5, 5, 10, 8, 7]);

// console.log(a);
