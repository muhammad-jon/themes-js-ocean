// console.log(8 ** (1 / 3));
// alert(1 + 2); // "12"
// alert(2 + "1"); // "21"

// alert(6 - "2"); // 4, converts '2' to a number
// alert("6" / "2"); // 3, converts both operands to numbers

// console.log(-2 + Number("1") + 2); // "122" and not "14"

// console.log(Number("21") + 2);

// let apples = "2";
// let oranges = "3";
// console.log(+apples + +oranges); // "23", the binary plus concatenates strings

// let a = 45 + +"65" + 87 - (32 * 64) / 32;

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// console.log(a); // 3
// console.log(c); // 0

// let a, b, c;
// a = b = c = 2 + 2;
// alert(a); // 4
// alert(b); // 4
// alert(c); // 4

// c = 2 + 2;
// b = c;
// a = b;

// let n = 2;
// n = n + 5;
// n = n * 2;

// let n = 2;
// n += 5; // n = n + 5; // now n = 7 (same as n = n + 5)
// n *= 2; // n = n * 2; // now n = 14 (same as n = n * 2)
// alert(n); // 14

// let n = 2;
// n *= 3 + 5; // right part evaluated first, same as n *= 8
// alert(n); // 16

// let a = 2;
// // ++counter; // works the same as counter = counter + 1, but is shorter
// console.log(a++); // 3
// console.log(a); // 3

// let counter = 1;
// let a = ++counter; // (*)
// console.log(a); // 2

// let counter = 1;
// let a = 5;
// counter = a; // (*) changed ++counter to counter++
// console.log(a); // 1

// let counter = 1;
// console.log(2 * counter++); // 4
// console.log(counter);

// let a = 8; //100
// console.log(a >> 3);

//100

// let a = (1 + 2, 3 + 4);
// console.log(a); // 7 (the result of 3 + 4)

// // three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//   console.log(a);
// }

// let a = 1,
//   b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// console.log("c=" + c);
// console.log("d=" + d);

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x);

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1, true, false
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // "45px", "9px",
// console.log("$" + 4 + 5); // "$45"
// console.log("4" - 2); //2
// console.log("4px" - 2); // NaN
// console.log("  -9  " + 5); // "-95"
// console.log("  -9  " - 5); // -14
// console.log(0 + 1); // 1
// console.log(undefined + 1); // 1, NaN
// console.log(" \t \n" - 2); // -2, NaN

// let rostmi = null;
// //0
// //1

// if (rostmi) {
//   console.log("truse qiymat");
// } else {
//   console.log("false qiymat");
// }

// 1. Foydalanuvchidan ikkita raqamni so'raydigan
// va ularning yig'indisini ko'rsatadigan kod yozing

// 2. ikkita sonning qiymatlarini o'zgartiruvchi
// dastur tuzing
// 2.1 boshqa o'zgaruvchi e'lon qilmasdan

// a = 4;
// b = 5;

// ////
// ////

// a; // 5
// b; // 4

// 1. Uchta son berilgan. Ularning o'rta arifmetigini topuvchi dastur tuzing.

// 2. Ikkita son berilgan. Ularning kvadratlari yig'indisi topuvchi dastur tuzing.

// 3. Doiraning uzunligi L berilgan. Uning radiusi R va yuzasi S ni topuvchi daastur tuzing.

// 4. Doiraning yuzasi S berilgan. Uning radiusi R va diamterini D ni topuvchi daastur tuzing.

// 5. Faylning hajmi baytlarda berilgan. Uning kilobaytdagi hajmini topuvchi dastur tuzing.

// 6. A va B musbat son berilgan (A > B). A uzunlikdagi kesmaga B uzunlikdagi kesmadan necha marta joylashtirish mumkin. Misol uchun, 16 sm lik kesmaga 5 sm lik kesmadan 3 ta joylashtirish mumkin.

// 7. Ikki xonali son berilgan. Uning raqamlari kvadrati yig'indisini topuvchi dastur tuzing. 35 => 34

// 8. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. 34 => 43

// 9. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi dastur tuzing. 120 => 1

// 10. Uch xonali son berilgan. Uning raqamlari yeg'indisini topuvchi dastur tuzing. 253 => 10

// 11. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. 692 => 296

// 12. Uch xonali son berilgan. Uning chapdan birinchi raqamini o'chirib oxiriga yozishdan hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 324 -> 243

// 13. Uch xonali son berilgan. Uning o'ngdagi birinchi raqamini o'chirib boshiga yozishdan hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 457 -> 745

// 14. Uch xonali son berilgan. Uning o'nliklar xonasidagi son bilan yuzliklar xonasidagi sonni almashtirish nastijasida hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 675 -> 765

// 15. To'rt xonali son berilgan. Uning raqamlarini teskari tartibda yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing.

// 16. 999 dan katta bo'lgan istalgan berilgan. Ushbu sonni bo'lib butunini olish (/) va bo'lib qoldig'ini olish (%) amalari orqali o'nliklar, yuzliklar va mingliklar xonasidagi raqamni topuvchi dastur tuzing.

// 17. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha to'liq minut o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab to'liq 205 minut degani.

// 18. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha soat va sekund o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab 3 soat 25 min 21 sekund degani. "03:25:21"
