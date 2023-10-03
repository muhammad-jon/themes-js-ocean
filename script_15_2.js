// function tenRun(nums) {
//   let a = null;
//   let ind = null;
//   for (let k = 0; k < nums.length; k++) {
//     if (nums[k] % 10 == 0) {
//       ind = k;
//       break;
//     }
//   }

//   let newArr = nums.slice(ind);
//   let beginArr = nums.slice(0, ind);

//   newArr.forEach((el, i) => {
//     if (el % 10 == 0) {
//       a = el;
//     } else {
//     }
//     newArr[i] = a;
//   });

//   return beginArr.concat(newArr);
// }

// console.log(tenRun([1, 2, 50, 1]));

// let n = 1.23956;

// console.log(Number(n.toFixed(10))); // 1.23

// alert(typeof 0); // "number"

// alert(typeof new Number(0)); // "object"!

// let a = new Number(0);
// if ([]) {
//   console.log("rost");
// } else {
//   console.log("yolg'on");
// }

// let num = Number("123"); // convert a string to number

// console.log(typeof num);

// let billion = 100_000_0_00_0;
// let billion1 = 1_000_000_000;

// console.log(billion);
// console.log(billion1);

// let micro = 1e-9; // 0.00000001
// let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes
// // console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)
// console.log(micro);

// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

// console.log(a == b); // true, the same number 255 at both sides

// let num = 23456;

// console.log(num.toString(36)); // ff

// console.log(num.toString(2)); // 11111111

// let a = 567.0;

// console.log(a.toString(36)); // 2n9c

// min max floor ceil round pow  + trunc

// let a = -45.999;
// console.log(Math.trunc(a));

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// alert(guestList); // a list of guests, multiple lines

// let matn = "Lorem";
// console.log(matn[-2]);
// console.log(matn[2]);

// let arr = [12, 4, 5, 6];

// console.log(arr.at(-2));

// let str = "Widget with id";

// console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
// console.log(str.indexOf("t  wit")); // -1, not found, the search is case-sensitive

// console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// let matn = " Assalomu alayku ,Lorem ipsum dolor sit amet";
// let soz = "Assalomu alaykum";

// let a = matn.includes(soz);

// if (a) {
//   console.log("valaykum assalom,");
// } else {
//   console.log("Assalomu alaykum");
// }

// let str = "stringify";
// alert(str.substring(2, 6)); // "ring"
// alert(str.substring(6, 2)); // "ring"

// // ...but not for slice:
// alert(str.slice(2, 6)); // "ring" (the same)

// let str = "stringify";
// alert(str.slice(-4, -2)); // 'ring', from the 2nd position get 4 characters

// let a = 45;
// b = a;
// console.log("this: a: ", a);
// b += 7;

// console.log("this: a: ", a);
// console.log("this: b: ", b);

// let a = { name: "Muhammad" };

// let k = a;
// console.log(a);
// k.name = "Ali";
// console.log(k);
// console.log("a", a);

// let a = [1, 2, 3, 4, 5];
// let b = a;

// console.log("a", a);
// b.push(34);
// console.log("b", b);
// console.log("a", a);

// let a = { name: "Muhamamd ", age: 23 };
// let b = {};

// for (let key in a) {
//   b[key] = a[key];
// }

// console.log("a", a);
// b.name = "Ali";
// console.log("b", b);
// console.log("a", a);

// let myObj = {
//   name: "John",
//   age: 30,
//   foo: function () {
//     return this.cars;
//   },
//   cars: {
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };

// console.log(myObj.foo());
