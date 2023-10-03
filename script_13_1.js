function unlucky1(nums) {
  if (nums.length >= 2) {
    if (
      (nums[0] == 1 && nums[1] == 3) ||
      (nums[nums.length - 2] == 1 && nums[nums.length - 1] == 3) ||
      (nums[1] == 1 && nums[2] == 3)
    )
      return true;
    else return false;
    // let str = "";
    // nums.map((el) => (str += String(el)));
    // console.log(str);
    // let index = nums.indexOf("13");
    // console.log(index);
    // if ((index >= 0 && index <= 2) || index >= nums.length - 2) return true;
    // else return false;
  } else return false;
}

// console.log(unlucky1([1, 3, 4, 5]));

// array = [12, 34, 67, 234];

// let obj = {
//   ism: "Muhammad",
//   manzil: "Termiz",
//   yoshi: 98,
//   alive: true,
//   oilasi: {
//     otasi: "ffgsdfsd",
//     onasi: "",
//   },
//   tel: 9989037474783,
// };

// console.log(obj.oilasi.otasi);

// let todo55 = {
//   userId: 3,
//   id: 55,
//   title:
//     "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
//   completed: true,
// };

// Abduraxmonov Subhonshoh
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Massiv elementlarini saralashni (o’sish tartibida) metodlarsiz bajarish
// [8,5,3,7,2,9,1] => [1,2,3,5,7,8,9]
// keyingi sharti boshqa massiv e’lon qilmasdan

// // 1 - usul (metod bilan);
// const arr = [8, 5, 3, 7, 2, 9, 1];
// deskend = arr.sort((a, b) => (a < b ? -1 : 1));
// console.log(deskend);

// // 2 - usul (metod siz)

// function saralsh(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let n = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = n;
//       }
//     }
//   }
//   return arr;
// }
// let numbers = [8, 5, 3, 7, 2, 9, 1];
// let saralanganNumbers = saralsh(numbers);
// console.log(saralanganNumbers);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(-2, 3, "Ananas");

// console.log(fruits); // ["Banana", "Orange", "Ananas"]

// let array = [4, 6, 9, 12, 45, 22, 67];

// function slicedArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       array.slice(i);
//       return array;
//     }
//   }

//   .slice(array.findIndex((el) => el % 2 != 0))
// }

// console.log();

// console.log(array);
// console.log(slicedArray(array));

// let array = [4, 6, 9, 4, 9, 22, 12, 45, 9, 22, 67];

// let foo = (array, son) => {
//   //   let count = 0;
//   //   for (let i = 0; i < array.length; i++) {
//   //       if (array[i] == son) {
//   //           count++;
//   //         }
//   //     }
//   //     return count;
//   return array.filter((element) => element == son).length;
// };

// let son = +prompt("sonni kiriting!");
// console.log(foo(array, son));

// let str = "     Lorem ipsum    , dolor     ";
// let trimmedStr = str.trim();
// console.log(trimmedStr); // "Lorem ipsum    , dolor"

// [9, 9, 9, 9, 9, 9, 9, 9][(1, 0, 0, 0, 0, 0, 0, 0, 0)];

// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] == 9) {
//       digits[i] = 0;
//     } else {
//       digits[i] += 1;
//       return digits;
//     }
//   }

//   digits.unshift(1);
//   return digits;
// };

// array = [9, 9, 9, 9];

// console.log(plusOne(array));

// let a = [1, 2, 3, 4, 5];
// let b = [6, 7, 8, 9];

// let c = a.concat(b);

// c = [1, ...b];
d = [...a, ...b, ...c];

// console.log(c);

let a = 5;
let b = 6;
console.log(a, b);
// let c, d;

// [c, d] = [b, a];

a = a + b - (b = a);

// b = a - b;
// a = a - b;

console.log(a, b);
