// let a = 1 % 4;
// console.log(a);

// // 3^5 = 3*3*3*3*3
// // 3**5  =  3*3*3*3*3

// //

// // S = pi * R**2
// // R = L/(2*Pi)

// // >=

// a = 5;
// b = 8;

// // a!=b  //true

// // 1439 > 143;

// // function add(a, b) {
// //   if (a == 0 || b == 0) {
// //     return 0;
// //   }
// //   return a + b + add(--a, --b);
// // }

// function array6(nums, i) {
//   if (nums.length == i) {
//     return false;
//   }
//   if (nums[i] == 6) return true;
//   else return array6(nums, ++i);
// }

// array6([1, 9, 4, 6, 6], 0); // true
// // [1, 9, 4, 6, 6]
// (i = 0), 1 == 6;
// (i = 1), 9 == 6;
// (i = 2), 4 == 6;
// (i = 3), 6 == 6;

// var user = "Hello";
// var group = {};
// var user = "Bye";

// let
// const

// var group = {};

// function sayHi() {
//   alert(phrase); // undefined

//   var phrase = "qiymat";

//   alert(phrase); // qiymat
// }
// sayHi();

// (function () {
//   alert("Parentheses around the whole thing");
// })();

// !(function () {
//   alert("Bitwise NOT operator starts the expression");
// })();

// +(function () {
//   alert("Unary plus starts the expression");
// })();

// let obj = {
//   name: "",
// };

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;

//   return counter;
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// let sayHi = function foo(who) {
//   alert(`Hello, ${who}`);
// };

// sayHi();
// foo();

// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest"); // use func to re-call itself
//   }
// };

// // sayHi(); // Hello, Guest

// // But this won't work:
// // func();

// let sayHi = function (who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     sayHi("Guest");
//   }
// };

// sayHi();
////////////////////////////////////
// let sayHi = function (who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // Error: sayHi is not a function
//   }
// };

// let welcome = sayHi;

// sayHi = null;

// welcome();

// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest"); // Now all fine
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Hello, Guest (nested call works)

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// sum(a)(b)(c);

// console.log(sum(4)(5)(3)(6)(7));

// let a = 5;

// for (let index = 0; index < 100; index++) {
//   console.log(index + " * " + a + " = " + index * a);
// }

// let a = 8;

// do {
//   console.log(a + " loop Bajarildi");
//   a--;
// } while (0 > 0);

// for (let i = 10; i > 0; i--) {
//   if (i % 2 != 0) continue;
//   console.log(i + " loop Bajarildi");
// }

// tuxta: for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (j == 5) break tuxta;
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

// let sum = 0;
// let count = 0;
// while (true) {
//   let a = +prompt("sonni kiriting");
//   if (a == 0) break;
//   count++;
//   sum += a;
// }

// alert(sum / count);

//
//

// // 10 gacha sonlarni random qilib olish
// let a = parseInt(Math.random() * 10); // 6

// 1 - 10;

// a = 4;

// 4 - 10;

// a = 8;

// 4 - 8;

// a = 7;
// 4 - 7;

// a = 6;
// // siz 4 ta urunoishda topdingiz

// // 8

// 1-10// 3-10 // 3-9

// while(){
//     let a = random son // 3 // 9
//     // kichik
//     // katta tan

// }

// if(meninatijam> komp){
//     siz yutqazdiniz
// }
// else if(men< komp ){
//     kompyuter yutqzid , tab
// } else durang

// 1-20

// 5-20

// 5-16

// 10-16

// 10-14

// // o'ylagan son = 12

// while(){
//     let random son = // 5 // 16 // 10 // 14 // 12

//     siz kiritigan son o'ylagnimdan kichik
//     siz kiritigan son o'ylagnimdan katta

//     to'g'ri

// }

// if(biz>komp){

// }
// else if (komp>biz){

// }
// else durang

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   //   f.toString = function () {
//   //     return currentSum;
//   //   };

//   return f;
// }

// sum(5)(-1)(2); // 6

// hixxhi;

// [x, x] = (2)[hix] = 1;

// function countHi2(str) {
//   let arr1 = str.split("hi");
//   console.log(arr1);
//   let arr2 = str.split("xhi");
//   console.log(arr2);
//   return arr1.length - arr2.length;
// }

// countHi2("hifdxhihinoxhidfshi");

// let a = "loremipsum";
// console.log(a.substring());
// // console.log(a);

// // hifdxhihinoxhidfshi

// hif == "xhi";
// hi == "hi";

// fdxhihinoxhidfshi;
// fdx = "xhi";
// fd = "hi";

// dxhihinoxhidfshi;

// xhihinoxhidfshi;
// xhi = "xhi";

// hinoxhidfshi;
// hi="hi"

// noxhidfshi;

// oxhidfshi

// xhidfshi

// dfshi

// fshi

// ...
// ...

// hi

// // x,-hello*
// // ,-hello*

// function starBit(str) {
//   if (str.length <= 1) return "";
//   if (str.substring(0)[0] != "-") return starBit(str.substring(1));
//   if (str.substring(1)[str.length - 2] != "*")
//     return starBit(str.substring(0, str.length - 1));
//   else return str;
// }

// let str = "-not really*";
// starBit("str");

// function nestParen(str) {
//   if (str == "") return true;
//   if (str[0] == "(" && str[str.length - 1] == ")")
//     return nestParen(str.substring(1, str.length - 1));
//   else return false;
// }
// /**
//  *
//  * @param {String} str
//  * @param {String} sub
//  * @param {Number} n
//  * @returns {Boolean}
//  */
// function strCopies(str, sub, n) {
//   if (str.length == 0) return true;
//   // if (str.indexOf(sub) < 0 && n > 0) return false;
//   // if (str.indexOf(sub) < 0 && n < 1) return true;
//   // return strCopies(str.substring(1), sub, n - 1);
//   return n <= (str.substring(0, sub.length) == sub)
//     ? 1 + strCopies(str.substring(1), sub, n)
//     : strCopies(str.substring(1), sub, n);
// }

// ;
// 1+1+1+""

// function strCopies(str, sub, n) {
//   if (n === 0) {
//     return true;
//   }
//   if (str.length < sub.length) {
//     return false;
//   }
//   if (str.substring(0, sub.length) === sub) {
//     return strCopies(str.substring(1), sub, n - 1);
//   } else {
//     return strCopies(str.substring(1), sub, n);
//   }
// }

// at n=0

// function strCopies(str, sub, n, k = 0) {
//   console.log(str);
//   if (!str.includes(sub)) {
//     return n <= k ? true : false;
//   }

//   return strCopies(
//     str.substring(1),
//     sub,
//     n,
//     str.substring(0, sub.length) == sub ? k + 1 : k
//   );
// }

// function strCopies(str, sub, n) {
//   console.log(str, sub, n);
//   if (str.length <= sub.length) return true;
//   return (
//     n <=
//     (str.substring(0, sub.length) == sub
//       ? 1 + Number(strCopies(str.substring(1), sub, n))
//       : Number(strCopies(str.substring(1), sub, n)))
//   );
// }
// console.log(strCopies("catcowcat", "cat", 2));

/*


let min = +prompt("Minimum chegarani kiriting");
let max = +prompt("Maksimum chegarani kiriting");

let x = Math.floor(Math.random() * (max - min) + min); // 1-10
let i = 1;
let i2 = 1;
let str = "Random soni taxminlang";
while (true) {
  let a = +prompt(str);
  if (a == x) {
    alert("Tabriklayman " + i + " ta urinishda topdingiz!");
    break;
  }
  if (x > a) str = a + " dan Kattaroq son kiriting";
  if (x < a) str = a + " dan Kichikroq son kiriting";
  console.log(x);
  i++;
}
console.log(`Siz ${i} ta urinishda topdingiz`);

function randomComputer() {
  // (4 + 15) / 2 = 9
  let random = Math.floor((min + max) / 2);
  
  do {

    let answer = prompt(
      "Kampyuterning o'ylagan soni: " +
      random +
      "Sizning o'ylagan soningiz katta (+), kichik (-), yoki tengmi (=)?"
      );
      
      if (answer === "+") {
        min = random + 1;
        random = Math.floor((min + max) / 2);
      } else if (answer === "-") {
        max = random - 1;
        guess = Math.floor((min + max) / 2);
      } else if (answer === "=") {
        console.log(`Kampyuter ${i2} ta urinishda to'g'ri topdi!`);
        break;
      } else {
        console.log("Noto'g'ri javob kiritdingiz!");
      }
      i2++;
    } while (true);
  }
  
  randomComputer();
  if (i > i2) {
    console.log("Kampyuter yutdi!");
  }
  if (i < i2) {
    console.log(`Siz yutdingiz!`);
} else {
  console.log("Imkoniyatlar teng!");
}

*/
// min max
// 0 - 1;
// 0 - 10;
// 0 + 5 - 10 + 5;
// 5 - 15;
// 5 - 15 - 5;
// 5 - 10;

// let a = Math.round(Math.random() * 10);
// console.log(a);

// setTimeout(() => console.log("Tugadi"), 10000);
// setInterval(() => console.log("Hello"), 1000);

/*
let min = +prompt("Kichik sonni kiriting: ");
let max = +prompt("Katta sonni kiriting: ");

let randomisedNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomisedNumber);
let userAnswerCount = 0;
let message = "Tahminingiz: ";

while (true) {
  let userAnswer = +prompt(message); // tahminiy sonni kiritish
  if (userAnswer == "" || userAnswer == 0) break; // user chiqib ketishi uchun
  userAnswerCount++; // userning tahminlari sonini hisoblash
  if (userAnswer === randomisedNumber) break; // to'g'ri topilganda chiqish
  if (userAnswer > randomisedNumber) {
    message = "Kichikroq son kiriting";
  }
  if (userAnswer < randomisedNumber) {
    message = "Kattaroq son kiriting";
  }
}

alert("Siz " + userAnswerCount + " ta urinishda topdingiz");

*/
/////////////////////////////////////////////////////////////////////
// biz son o'ylaymiz
// kompyuter while loopning ichida qayta qayta random son beradi
// biz son to'g'ri yoki noto'g'riligni yoki katta yoki kichiklgini aytamiz
//    to'g'ri belgilasak - loop tugasin
//    uni tahminiy soni katta bo'lsa - random qilinayotgan oraliqning max=randomson
//    uni tahminiy soni kichik bo'lsa - random qilinayotgan oraliqning min=randomson
//      !!!!!!  random soni oralig'i belgilangan oraliq bo'yichi qisqarib ketaverishi kk

// user bilan kopyuterlarning tahminlari sonini solishtirish
// user>pc    - pc win
// user<pc    - user win
// user==pc   - equal

/////////////////////////////////////////////////////////////////////////

// exit: while (true) {
//   let key = +prompt("1. Boshlash \n2.Chiqish");
//   switch (key) {
//     case 1:
//       guessNumber();
//       break;
//     case 2:
//       break exit;
//     default:
//       break;
//   }
// }
// function guessNumber() {
//   let min = +prompt("Kichik sonni kiriting: ");
//   let max = +prompt("Katta sonni kiriting: ");

//   let numberFound = false;
//   let count = 0;

//   while (!numberFound) {
//     count++;
//     let randomSon = Math.round(Math.random() * (max - min) + min);
//     numberFound = confirm(randomSon + " sonni o`yladingizmi");
//     console.log(randomSon);
//     if (numberFound) {
//       alert(`Kompyuter sonni ${count} urinishda topdi`);
//       break;
//     }
//     let chooseNumber = +prompt(
//       `1. Siz o'ylagan son ${randomSon} dan katta sonmi
//         \n2. yoki
//         \n3. ${randomSon} dan kichik sonmi`
//     );

//     if (chooseNumber == 1) {
//       min = randomSon + 1;
//     } else if (chooseNumber == 3) {
//       max = randomSon - 1;
//     }
//   }

//   let randomson = Math.floor(Math.random() * 100) + 1;
//   let son;
//   let counter = 0;

//   while (true) {
//     son = parseInt(prompt("Sonni taxmin qiling (1-100 oralig'ida):"));
//     counter++;

//     if (son === randomson) {
//       alert("Tabriklaymiz! Siz " + counter + " urinishda to'g'ri topdingiz.");
//       break;
//     } else if (son < randomson) {
//       alert("Katta son kiriting.");
//     } else {
//       alert("Kichik son kiriting.");
//     }
//   }

//   if (count === counter) {
//     alert("O`yin durrang bilan yakunlandi");
//   } else if (count > counter) {
//     alert("Siz kompyuterni mag`lub qildingiz.");
//   } else {
//     alert("Sizni kompyuterni mag`lub qildi");
//   }
// }

// function dividesSelf(n) {
//   let num = n;
//   while (num !== 0) {
//     if (num % 10 === 0 || n % (num % 10) !== 0) {
//       return false;
//     }
//     num = Math.floor(num / 10);
//   }
//   return true;
// }

// dividesSelf(152);

// let newArr = nums.filter((el)=>el%2==0);
//   return newArr.slice(0, count);

// let a = [6, 1, 15, 16, 24, 2, 4, 46, 5, 8];
// // [6, 2, 4, 8];

// let newArr = a.filter((el) => {
//   console.log(el);
//   return el % 2 == 0 && el > 10;
// });

// console.log(newArr);

// let a = setTimeout(foo, 2000);
// let a = 0;

// function foo() {
//   a++;
//   if (a == 10) {
//     clearInterval(b);
//   }
//   alert("Bajarildi");
// }

// let b = setInterval(foo, 2000);

// function foo(s){

// }

// let sum = new Function('a', 'b', 'return a + b');

// alert( sum(1, 2) ); // 3

// function sum() {
//   return 0;
// }
