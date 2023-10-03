// 2. Kiritilgan so’zni teskari
// chiqaradigan funksiya tuzing.
// Masalan:

// 	Kiritish: "Hello"
// 	Chiqish: "olleH"

// let yozuv = "Hello";
// let natija = "";

// console.log(yozuv[0]);
// console.log(yozuv[1]);
// console.log(yozuv[2]);
// console.log(yozuv[3]);
// console.log(yozuv[4]);

// for (let i = yozuv.length - 1; i >= 0; i--) {
//   natija += yozuv[i];
// }

// console.log(natija);
//////////////////////////////////////////
//////////////////////////////////////////
// 3. Sonni raqamlarini so’zlarda ifodalaydigan funksiya tuzing.
// Masalan:
// 	Kiritish: 74254
// 	Chiqish : yetti to’rt ikki besh to’rt

// function numberToString(a) {
//   let n = a;
//   let natija = "";

//   for (let i = 0; i < String(n).length; i++) {
//     switch (a % 10) {
//       case 0:
//         natija += "nol ";
//         break;
//       case 1:
//         natija += "bir ";
//         break;
//       case 2:
//         natija += "ikki ";
//         break;
//       case 3:
//         natija += "uch ";
//         break;
//       case 4:
//         natija += "to'rt ";
//         break;
//       case 5:
//         natija += "besh ";
//         break;
//       case 6:
//         natija += "olti ";
//         break;
//       case 7:
//         natija += "yetti ";
//         break;
//       case 8:
//         natija += "sakkiz ";
//         break;
//       case 9:
//         natija += "to'qqiz ";
//         break;
//     }
//     a = (a - (a % 10)) / 10;

//     // console.log((a = Math.floor(a)) % 10);
//     // a=a/10
//   }

//   return natija;
// }

// function reversNumber(k) {
//   let reversedNumber = 0;
//   for (let i = String(k).length - 1; i >= 0; i--) {
//     reversedNumber = reversedNumber + (k % 10) * 10 ** i;
//     k = Math.floor((k /= 10));
//   }
//   return reversedNumber;
// }

// let foo = reversNumber(3456); //6543

// numberToString(1234); //bir ikki uch to'rt

// document.getElementById("p").innerText = numberToString(1234);

// function addTwoNumber(a, b) {
//   return a + b;
// }

// let son = addTwoNumber(5, 6);

// console.log(son);

// let a1 = 7;
// let b1 = 9;
// let yigindi1 = a1 + b1;

// console.log(yigindi1);

// let a2 = 89;
// let b2 = 921;
// let yigindi2 = a2 + b2;

// console.log(yigindi2);

// let a = 5;
// let b = 4;
// let c = 9;

// console.log((a + b + c) / 3);

function kvadratlariYigindisi(a, b) {
  return a * a + b * b;
}

let son = kvadratlariYigindisi(3, 6);

console.log(son);
