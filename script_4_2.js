// 6. A va B musbat son berilgan (A > B).
// A uzunlikdagi kesmaga B uzunlikdagi
// kesmadan necha marta joylashtirish mumkin. Misol uchun, 16 sm lik kesmaga 5 sm lik kesmadan 3 ta joylashtirish mumkin.

// let A = 45;
// let B = 7;
// let natija = null;
// natija = (45 - (45 % 7)) / 7;
// console.log(
//   `${A} sm lik kesmaga ${B} sm lik kesmadan ${natija} ta joylashtirish mumkin`
// );
// let n = 45;
// let birlar, onlar;
// birlar = n % 10; //5
// onlar = (n - (n % 10)) / 10; //4
// console.log(`kvadratlari yig'indisi ${birlar ** 2 + onlar ** 2}`);

// 15. To'rt xonali son berilgan. Uning raqamlarini teskari tartibda yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing.

// let n = 1234;
// // 4321;

// let birlar, onlar, yuzlar, minglar;
// birlar = n % 10;
// onlar = ((n - birlar) / 10) % 10;
// yuzlar = ((n - onlar * 10 - birlar) / 100) % 10;
// minglar = ((n - yuzlar * 100 - onlar * 10 - birlar) / 1000) % 10;
// // let natija = minglar + yuzlar * 10 + onlar * 100 + birlar * 1000;

// console.log(`${birlar}${onlar}${yuzlar}${minglar}`);

// let kola = 4,
//   pepsi = 5;

// kola = kola * pepsi; //9
// pepsi = kola / pepsi; // 4
// kola = kola / pepsi; // 9-4 = 5;

// console.log(pepsi);

// 18. Kun boshidan boshlab N sekund o'tdi.
// Kun boshidan boshlab qancha soat va sekund o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab 3 soat 25 min 21 sekund degani.

// let n = 234567;
// let sekund, minut, soat;
// sekund = n % 60;
// soat = (n - (n % 3600)) / 3600;
// minut = (n - sekund - soat * 3600) / 60;

// console.log(
//   `kun boshidan N=${n} sekund o'tdi. Bu kun boshidan boshlab ${soat} soat ${minut} min ${sekund} sekund degani.`
// );

///////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// let rostmi = 2 > 1;

// console.log(rostmi);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("Z" > "A"); // true 90>65
// console.log("Glow" > "Glee"); // true 111>101
// console.log("Bee" > "Bz"); // true

// console.log();

// let a = 0;
// console.log(Boolean(a)); // false
// let b = "0";
// console.log(Boolean(b)); // true
// console.log(a == b); // true!

// console.log(1 == "1");

// console.log(typeof null);
// console.log(typeof undefined);

// console.log(null == undefined);

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined <= 0);
// console.log(undefined >= 0);

// & mantiqiy ko'paytirish
// | mantiqiy qo'shish

// let olma = true;
// let anor = false;
// console.log(anor || olma);

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// shart operatori

// let chelChiqar = confirm("chek chiqarishni hohlaysizmi");

// if (chelChiqar) {
//   alert("Siz 400k yechib oldingiz");
// } else {
//   alert("bizning hizmatlardan foydalanganingizdan mmamnunmiz!");
// }

let son = -450;

if (Math.abs(son) > 99) {
  console.log("Yuzlar ");
} else if (Math.abs(son) > 9) {
  console.log("onlar ");
} else {
  console.log("birlar ");
}

// son berilgan
// agar son 100 dan katta bo'lsa sonning yarmini
// agar son 10 dan katta bo'lsa sonning ikkilanganini
// agar son 10 dan kichik bo'lsa uni 10 ga ko'paytirib natijani chiqaring
