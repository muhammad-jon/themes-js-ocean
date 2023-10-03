// 1 dan 100 gacha bo'lgan tub sonlarni
// topib, chiqaruvchi dastur yaratish uchun for siklidan foydalanish.

// for (let i = 2; i < 100; i++) {
//   let tubSon = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       tubSon = false;
//       break;
//     }
//   }
//   if (tubSon) {
//     console.log(i + "tub son");
//   }
// }

// Taxminlash o'yini simulyatsiya qiladigan
// dastur yaratish, foydalanuvchi tasodifiy
// generatsiya qilingan sonni topish uchun
// while siklidan foydalanish.

// biz = prompt();
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// let min = +prompt("minimal: ");
// let max = +prompt("maximal: ");
// let count = 0;

// tugatish = false;
// while (!tugatish) {
//   let komp = Math.floor(Math.random() * (max - min) + min); //
//   tugatish = confirm(komp + " siz o'ylagan sonmi?");
//   if (tugatish) {
//     break;
//   }
//   count++;
//   let choose = +prompt(
//     "\n 1. men o'ylagan son bundan katta\n 2. men o'ylagan son bundan kichik"
//   );
//   if (choose == 1) {
//     min = ++komp;
//   } else if (choose == 2) {
//     max = komp;
//   } else {
//     continue;
//   }
// }

// alert(`siz ${count + 1} ta urinishda topdingiz`);

// 1) sonni nechta urinishda topganini
// hisoblaymiz

// 2) son oralig'ini qisqartirib ketaveramiz

// 3) kompyuter biln user almashadi ,
//kompyuter o'ylaydi biz topamiz

// 4) battle bo'ladi,
//kim nechta urinishda topgani

// ceil
// floor
// round

// version son topish 0.0.1;

// while (true) {
//   let kompyuterOylaganSon = Math.round(Math.random() * 10);

//   // console.log(kompyuterOylaganSon);
//   console.log(Math.round(kompyuterOylaganSon));

//   let togrimi = confirm(`siz o'ylagan son ${kompyuterOylaganSon} mi?`);
// }
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// // version son topish 0.0.2;
// let togrimi = false;
// while (!togrimi) {
//   let kompyuterOylaganSon = Math.round(Math.random() * 10);
//   togrimi = confirm(`siz o'ylagan son ${kompyuterOylaganSon} mi?`);
// }

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// // version son topish 0.0.3;
// let count = 0;
// let togrimi = false;
// while (!togrimi) {
//   let kompyuterOylaganSon = Math.round(Math.random() * 10);
//   togrimi = confirm(`siz o'ylagan son ${kompyuterOylaganSon} mi?`);
//   count++;
// }

// alert(`tabriklaymiz siz ${count} ta urinishda topdingiz`);

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// // version son topish 0.1.0;
// let min = +prompt("min: ");
// let max = +prompt("min: ");

// let count = 0;
// let togrimi = false;
// while (!togrimi) {
//   let kompyuterOylaganSon = Math.round(Math.random() * (max - min) + min);
//   togrimi = confirm(`siz o'ylagan son ${kompyuterOylaganSon} mi?`);
//   count++;
// }

// alert(`tabriklaymiz siz ${count} ta urinishda topdingiz`);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// // version son topish 1.0.0;
// let min = +prompt("min: ");
// let max = +prompt("max: ");
// let minOraliq = min;
// let maxOraliq = max;

// let count = 0;
// let togrimi = false;
// while (!togrimi) {
//   let kompyuterOylaganSon = Math.round(Math.random() * (max - min) + min);
//   togrimi = confirm(`siz o'ylagan son ${kompyuterOylaganSon} mi?`);
//   if (togrimi) {
//     break;
//   }
//   let oraliq = +prompt(
//     "1. O'ylagan sonim bundan katta \n2. O'ylagan sonim bundan kichik"
//   );
//   switch (oraliq) {
//     case 1:
//       min = kompyuterOylaganSon + 1;
//       break;
//     case 2:
//       max = kompyuterOylaganSon - 1;
//       break;
//   }
//   //   if (oraliq == 1) {
//   //     min = kompyuterOylaganSon + 1;
//   //   } else if (oraliq == 2) {
//   //     max = kompyuterOylaganSon - 1;
//   //   }
//   count++;
// }

// alert(`tabriklaymiz siz ${++count} ta urinishda topdingiz`);

// /////////////////////////////////////////////////////////////

// let kompOylaganRandomSon = Math.round(
//   Math.random() * (maxOraliq - minOraliq) + minOraliq
// );

// console.log(kompOylaganRandomSon);

// let counter = 0;
// let topildi = true;
// while (topildi) {
//   let bizningSon = +prompt(
//     `(${minOraliq},${maxOraliq}) oraliqdagi sonni topshiga harakat qilingchi: `
//   );
//   counter++;
//   if (bizningSon == kompOylaganRandomSon) {
//     alert(`Tabriklaymiz siz ${counter}ta urinishda to'g'ri topdingiz`);
//     topildi = false;
//   }
//   if (bizningSon > kompOylaganRandomSon && bizningSon < maxOraliq) {
//     maxOraliq = bizningSon;
//   } else if (bizningSon < kompOylaganRandomSon && bizningSon > minOraliq) {
//     minOraliq = bizningSon;
//   }
// }

// if (count > counter) {
//   alert("Tabriklayman siz kompyuterni yutdingiz");
// } else if (count < counter) {
//   alert("Uzr kompyuterga yutqazdingiz");
// } else {
//   alert("Durang!!!");
// }

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// if (oraliq == 1) {
//   min = kompyuterOylaganSon + 1;
// } else if (oraliq == 2) {
//   max = kompyuterOylaganSon - 1;
// }
// let oraliq = "1";

// switch (oraliq) {
//   case "1":
//   case "2":
//   case "3":
//     console.log("1 2 3 tanlandi");
//     break;
//   default:
//     console.log("Bundan son mavjud emas");
//     break;
// }
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     console.log("Too small");
//     break;
//   case 4:
//     console.log("Exactly!");
//     break;
//   case 5:
//     console.log("Too big");
//     break;
//   default:
//     console.log("I don't know such values");
// }

// let a = 0;
// let b = 1;
// do {
//   console.log(a + b);
//   b = a + b;
//   a = b - a;
// } while (a < 100);

//0  1  1  2  3  5  8  13  21
//a  b  c
//   a  b  c
//      a  b  c

// let n = 45;
// label: {
//   if (n == 45) {
//     break label;
//   }
//   console.log("hello");
// }
