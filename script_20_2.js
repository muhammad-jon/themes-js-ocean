// let savollar = [
//   {
//     savol: "5x5",
//     javoblar: ["a)12", "b)15", "c)25", "d)30"],
//     javob: "c",
//   },
//   {
//     savol: "3x5",
//     javoblar: ["a)12", "b)15", "c)25", "d)30"],
//     javob: ["b"],
//   },
//   {
//     savol: "4x3",
//     javoblar: ["a)12", "b)15", "c)25", "d)30"],
//     javob: ["a"],
//   },
//   {
//     savol: "",
//     javoblar: ["", "", "", "", ""],
//     javob: [""],
//   },
// ];

// let count = 0;
// sora();

// function sora() {
//   let sorov = prompt(
//     `TESTNI BOSHLASH UCHUN 1 NI BOSING\nTestga qo'shimcha kiritish uchun 2 ni bosing`
//   );
//   if (sorov == "1" && count == 0) {
//     boshlash();
//   }
//   if (sorov == "2") {
//     add();
//   }
//   if (sorov == "1" && count != 0) {
//     afterAdd();
//   }
//   // if(!(sorov=="1" && sorov=="2")&& again!=false){sora();}
// }

// function boshlash() {
//   let y = savollar.length;
//   let sum = 0;
//   let s = new Date();
//   for (i = 0; i < y - 1; i++) {
//     let n = prompt(`${savollar[i].savol}\n${savollar[i].javoblar.join("\n")}`);

//     if (n == "finish" || n == "tugatish") {
//       break;
//     }
//     if (n[0].toLocaleLowerCase() == savollar[i].javob) sum++;
//   }
//   let e = new Date();
//   alert(
//     `siz ${
//       savollar.length - 1
//     } savoldan ${sum} tasiga to'g'ri javob berdingiz\nsiz testga ${
//       e - s
//     } ms vaqt sarfladingiz`
//   );
//   let again = prompt(
//     `jarayonni qaytadan boshlaysizmi???\n1>>>>>>>ha\n2>>>>>>>yo'q`
//   );
//   if (again == "1" || again == "") {
//     sora();
//   } else {
//     alert(`hayr so'g' bo'ling`);
//   }
// }

// function afterAdd() {
//   let y = savollar.length;
//   let sum = 0;
//   let s = new Date();
//   for (i = 0; i < y; i++) {
//     let n = prompt(
//       `${savollar[i].savol}\n${savollar[i].javoblar[0]}\n${savollar[i].javoblar[1]}\n${savollar[i].javoblar[2]}\n${savollar[i].javoblar[3]}`
//     );
//     if (n == "finish" || n == "tugatish") {
//       break;
//     }
//     if (n[0] == savollar[i].javob[0] || n[0] == savollar[i].javob[1]) sum++;
//   }
//   let e = new Date();
//   alert(
//     `siz ${
//       savollar.length
//     } savoldan ${sum} tasiga to'g'ri javob berdingiz\nsiz testga ${
//       e - s
//     } ms vaqt sarfladingiz`
//   );
// }

// function add() {
//   count = count + 1;
//   String.fromCharCode(105);
//   savollar[savollar.length - 1].savol = prompt(`savol matnini kiriting`);
//   for (let i = 0; i < savollar.javoblar.length; i++) {
//     savollar[savollar.length - 1].javoblar[0] = String.fromCharCode(97 + i);
//     +prompt(`${String.fromCharCode(97 + i)}) variantni kiriting `);
//   }

//   savollar[savollar.length - 1].javoblar[1] = savollar[
//     savollar.length - 1
//   ].javob[0] = prompt(`javobni kiriting >>>>> namuna   a yoki b yoki c yoki d`);
//   let t = savollar[savollar.length - 1].javob[0];
//   if (t != "a" && t != "b" && t != "c" && t != "d") {
//     while (t != "a" && t != "b" && t != "c" && t != "d") {
//       savollar[savollar.length - 1].javob[0] = prompt(
//         `iltimos javobga   a , b , c yoki d belgilaridan birini kiriting`
//       );
//       t = savollar[savollar.length - 1].javob[0];
//     }
//   }
//   alert("savol qoshildi");
//   sora();
// // }

// let test = [
//   {
//     savollar: "kommunikatsiya nima ?",
//     variantlar: [
//       "a.Kommunikatsiya, bir necha odamlar o'rtasida ma'lumot almashish va o'zaro muloqot qilish jarayonidir",
//       "b.(lot. communicatio — umumlashtiraman, bogʻlayman) — 1) kibernetikada — informatsiya (axborot)larni almashish jarayoni. ",
//       "c.bu narsa haqida bilmiyman",
//       "d.togri javob b bandda berilgan",
//     ],
//     javobi: "b",
//   },
//   {
//     savollar:
//       "Jismoniy nuqtayi nazardan yondoshiladigan Kommunikatsiyani biz nima  deb ataymiz ?",
//     variantlar: ["a.ma'lumot", "b.aloqa", "c.so'zlashuv", "d.togri javob yoq"],
//     javobi: "b",
//   },
//   {
//     savollar:
//       "Inson yaratgan texnikaviy tizimlarda nechta asosiy Kommunikatsiya turi bor ?",
//     variantlar: ["a.4 ta", "b.7 ta", "c.3 ta", "d.o'zi bittaku"],
//     javobi: "a",
//   },
//   {
//     savollar: "Ommaviy kommunikatsiya nima ?",
//     variantlar: [
//       "a.Ommaviy kommunikatsiya deganda ommaviy axborot vositalari orqali keng miqyosdagi xabarlar yoki maʼlumotlarni yuborish, qabul qilish, almashish jarayoni tushunilishi mumkin",
//       "b.Ommaviy kommunikatsiyada mazmunlar, fikrlar, ma'lumotlar, xabarlar va boshqa ma'lumotlar bo'lishi mumkin.",
//       "c.endi bilib olaman ",
//       "d.bu savol xato",
//     ],
//     javobi: "a",
//   },
//   {
//     savollar: "qani kursdoshlar testga bolgan fikringiz qanday",
//     variantlar: [
//       "a.umuman yoqmadi",
//       "b.savoli kam bolib qolibdiku",
//       "c.boladi , uncha yaxshi emas",
//       "d.juda ajoyib chiqibdi zo'r",
//     ],
//     javobi: "d",
//   },
// ];
// //   let qoshimcha_savol = +prompt(
// //     "savol sonini kiriting kiritmasangiz 0 ni kiriting"
// //   );
// //   let question;
// //   let obj;
// //   for (let i = 0; i < qoshimcha_savol; i++) {
// //     obj = {
// //       savollar: prompt("savol kiriting"),
// //       variantlar: [],
// //       javobi: prompt("Togri javob qaysi"),
// //     };
// //     for (let i = 0; i < 4; i++) {
// //       question = prompt("variantlarini yozing");
// //       obj.variantlar.push(question);
// //     }
// //     test.push(obj);
// //   }

// let set_set = new Set();
// let text_one = test.length;
// let text_two;
// let sum = 0;
// do {
//   sum = Math.floor(Math.random() * test.length);
//   set_set.add(test[sum]);
//   text_two = set_set.size;
// } while (set_set.size != text_one);
// let newarr = Array.from(set_set);

// let ochko = 0;
// for (let i = 0; i < test.length; i++) {
//   let newarr = Array.from(set_set);
//   let nimadir = prompt(
//     newarr[i].savollar + "\n" + newarr[i].variantlar.join("\n")
//   );

//   if (nimadir == "exit" || nimadir == "cancel" || nimadir == "quit") {
//     break;
//   }
//   if (
//     nimadir == newarr[i].javobi ||
//     nimadir == newarr[i].javobi.toUpperCase()
//   ) {
//     ochko++;
//   }
//   if (nimadir === null || nimadir === "") {
//     alert("siz hech narsa yozmadingiz");
//     i = i - 1;
//   }
// }

// alert(
//   " Siz " +
//     test.length +
//     " ta  savoldan " +
//     ochko +
//     " tasiga javob berdingiz va " +
//     ochko * 5 +
//     " ballga ega bo'ldingiz "
// );
// 1-o'zgarish,javob orniga hech narsa yozmasa keyingi savolga o'tmaydi
// 2-ozgarish yangi savol qosha oladi
// 3-ozgarish savollar almashadi

let a = [
  "umuman yoqmadi",
  "savoli kam bolib qolibdiku",
  "boladi , uncha yaxshi emas",
  "juda ajoyib chiqibdi zo'r",
];
let correctAnswer = "boladi , uncha yaxshi emas";

let r = Math.floor(Math.random() * a.length);

console.log("a) " + a.at(r - 0)); //2 // 3
console.log("b) " + a.at(r - 1)); //2 // 3
console.log("c) " + a.at(r - 2)); //2 // 3
console.log("d) " + a.at(r - 3)); //2 // 3

let userAnswer = prompt();
let anserLetterIndex = userAnswer[0].charCodeAt(0); // a 97

// console.log("variantIndex: ", anserLetterIndex);
// console.log("random: ", r);
// console.log("v-97: ", anserLetterIndex - 97);

console.log(a.at(anserLetterIndex - 97 - r) == correctAnswer);

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//5=> 1*2*3*4*5;

// factorial(5) =  1 * 2 * 3 * 4 * 5
// factorial(4) = 1 * 2 * 3 * 4
// factorial(3) = 1 * 2 * 3
// factorial(2) = 1 * 2
// factorial(1) = 1
