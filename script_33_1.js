// let arr = [12, true, { age: 45, name: "palon" }, "Matn"];

// console.log(arr);
// console.log(...arr);

// let numbers = [
//   12, 435, 341534, 54, 7, 567, 65, 64, 26, 456, 4315315435, 5, 3245, 34, 534,
//   15, 4534534,
// ];

// let max = Math.max(...numbers);

// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) max = numbers[i];
// }

// console.log(max);

// let arr3 = arr;

// console.log(arr);
// console.log(arr2);

// console.log("after");
// arr2[0] = 45;

// console.log(arr);
// console.log(arr2);

// let arr = [123, 878, 9, 43, 789];

// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];
// let [a, b, c, ...d] = arr;

// console.log(a, b, c);
// console.log(d);

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
// }

// sum(12, 434, 543, 65, 645);
// sum(12, 434, 543);
// sum(12, 434, 543, 45, 432, 4, 324, 23, 4, 234, 23);

// let arr = [12, 34, 345, 4, 6, 54];
// let arr2 = [...arr];

// console.log(arr);
// console.log(arr2);

// arr[3] = 23456789;

// console.log(arr);
// console.log(arr2);

// [12,34,345,4,6,54,12,34,564,6,5,43]

// console.log(arr.join(arr2));

// let arr3 = [546, 4543, ...arr, 546, 798, 3, ...arr2];

// let obj = {
//   age: 34,
//   name: "John",
// };

// let obj2 = { ...obj };

// console.log(obj);
// console.log(obj2);

// obj2["age"] = 45;

// console.log(obj);
// console.log(obj2);

// let str = "salom";
// let str2 = str;

// console.log(str);
// console.log(str2);

// str2 = "hello";

// console.log(str);
// console.log(str2);

// let arr = [12, 32, 4, 32, 42, 34, 234];
// let arr2 = JSON.parse(JSON.stringify(arr));

// console.log(arr);
// console.log(arr2);

// arr2[2] = 23456;
// console.log("after");

// console.log(arr);
// console.log(arr2);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let obj = { age: 45, name: "John", surname: "Doel" };

////1-usul
// let obj2 = JSON.parse(JSON.stringify(obj)); //1-usul

////2-usul
// for orqali aylanib har birini boshqa objayga push qilaizm

////3-usul
let obj2 = obj;

console.log("obj: ", obj);
console.log("obj2: ", obj2);

obj2["age"] = 23478;

console.log("after");

console.log("obj: ", obj);
console.log("obj2: ", obj2);

//////////////////////////////////////////
