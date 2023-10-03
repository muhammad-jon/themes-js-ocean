// let b = [1, 2, 3, 56, 78, 123];
let arrA = [];
let arrB = new Array();

// let obj = {
//   rangi: "oq",
//   material: ["temir", "taxta"],
//   olchamlari: {
//     boyi: 123,
//     eni: 50,
//     uzunligi: 80,
//   },
// };

// console.log(obj.olchamlari.eni);

// let a = {};

// let b = new Object();

// const myCar2 = {};

// console.log(myCar2);

// myCar2.color = "white";
// myCar2.year = 2023;
// myCar2.power = 300;

// console.log(myCar2);

// // delete myCar2.power;

// myCar2.power = 360;

// console.log(myCar2);

// const a = {};
// a.soni = 26;

// console.log(a);

// const myCar = {};

// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// // console.log(myCar);

// const myCar3 = {};
// // Bracket notation
// myCar3["make"] = "Ford";
// myCar3["model"] = "Mustang";
// myCar3["year"] = 1969;
// console.log(myCar3);

// let smt = prompt("Mashinaning nimasini bilmoqchisiz: ");

// console.log(myCar3.smt);

// let newOBJ = {
//   "": "bu bosh joy orqali berilgan qiymat",
//   34: "BU son lar otrqali berilgan qiymat",
//   45: "bu number tipia berilgan qiymat",
//   "-": "bu belgi orqali berilgan qiymat, ",
// };

// let obj2 = {
//   "": "bu bosh joy orqali berilgan qiymat",
//   34: "BU son lar otrqali berilgan qiymat",
//   45: "bu number tipia berilgan qiymat",
//   "-": "bu belgi orqali berilgan qiymat, ",
//   foo: function () {
//     // console.log("");
//     return "Obekt ichidagi funksiyaga murojaat qilindi";
//   },
//   newOBJ: { num: 45 },
// };

// console.log(obj2.foo());

// // let foo = function () {};

// // function foo2() {}

// // let foo3 = () => {};

// let obj1 = { num: 34 };

// // console.log(obj1.toString() == obj2.toString());

// console.log("num" in obj1);

// if ("color" in obj1) {
//   obj1.color = "red";
// } else {
//   obj1.color = "yellow";
// }

// // console.log(obj1);
// let obj2 = { num: 67, name: "foo" };

// // for (let i = 0; i < array.length; i++) {
// //   const element = array[i];
// // }

// for (let key in obj2) {
//     // console.log(key);
//   console.log(obj2[key]);
// }

function createObj(name, age, city = "XXX") {
  return {
    name,
    age,
    city,
    arr: [],
  };
}

let objF = createObj("John", 30, "Termiz");
let objK = createObj("Anna", 18, "Angor");

console.log(objF);
console.log(objK);

let date = new Object();
console.log(date.__proto__);

// o'ziga xos ma'umot turi , o'zida
// Istagancha qiymat
// keylarda chklov yo'q
// qiymatda istagan narsa saqlashimiz mumkin
// murojaat qilish , nuqta va [] qavs bilan
// obejtadagi ma'lumotni o'chirish delete bn amalga oshirialdi
// obj aylanish uchun forIn dan foydalaniladi
// obj da shu key borligini bilish uchun 'in'
//
