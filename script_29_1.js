// let massiv = [5, 12, 8, 3, 10, 25];
// let toq = massiv.filter((el) => el % 2 != 0);
// let juft = massiv.filter((el) => el % 2 == 0);

// console.log(` Juflari: ${juft} : Toqlari ${toq}`);

// --Massivning katta elementini topish

// let massiv = [5, 12, 80, 3, 10, 25];
// let engKatta = Math.max(...massiv);
// console.log(engKatta);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let arr2 = [9, 56, 34, 12, 45, 78];

// // let arr3 = [...arr, ...arr2];

// // console.log(arr3);

// let [a, b, c, ...d] = arr2;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// --4.Qiymat o'zgartirish:Berilgan ob'ekning malum bir o'zgaruvchisini yangilaydigan dastur yarating.

// let Mahsulotlar = {
//   nomi: "Olma",
//   rangi: "qizil",
//   navi: "Qirmizi",
//   narxi: 5000,
//   miqdori: 10,
// };

// function doo(price) {
//   Mahsulotlar.narxi = price;
// }

// doo(23456);

// console.log(Mahsulotlar);

// --3.Ob'ekt tarkibi:Berilgan ob'ek ichida nechta o'zgaruvchilar borligini aniqlab chiqaruvchi dastur yarating.
// let Mahsulotlar = {
//   nomi: "Olma",
//   rangi: "qizil",
//   navi: "Qirmizi",
//   narxi: 5000,
//   miqdori: 10,
// };
// count = 0;
// function Sanovchi(Mahsulotlar) {
//   for (let i in Mahsulotlar) {
//     console.log(i);
//     count++;
//   }
//   return count;
// }
// alert(Sanovchi(Mahsulotlar));

// ---1.Berilgan objectning ichida malum bir maydoning mavjutligini tekshiruvchi funksiya yaratish.
// let person = {
//   name: "Ozodbek",
//   age: 25,
//   city: "Tashkent",
// };
// // let keySearch = (person) => "name" in person;

// // alert(keySearch(person));

// console.log(person.key);

// let name = "234324";

// console.log(typeof name);

// let son = 3245678;
// let birinchi = "Ikkitalik qo'shirnoq"; //
// let ikkinchi = "Bittalik ${45 + 67} qotirnoq"; //
// let uchunchisi = `Backtick ${(function () {
//   let a = 5;
//   let b = 56;
//   return a + b;
// })()} orqali`; //

// console.log(ikkinchi);
// console.log(uchunchisi);

// let str = " Lorem     ";
// console.log(str.padStart(2, "k"));
// console.log(str.trim().length);

// let str = "Salom Dunyo lorem ispum dolor sit amet ";
// let arr = str.split(" lorem ");
// console.log(arr);

// console.log(arr.join(" Hello "));

// let arr = [, , , , , , ,];
// arr.fill("k");

// console.log(arr);

// let text = "5";
// let newa = text.padEnd(4, "Salom");

// console.log(newa);

// let str = "LoRem";

// console.log(str.toLocaleUpperCase());

// let str = "Lorem ispum Lorem ispum";
// console.log(str.match("em"));
// console.log(str);
