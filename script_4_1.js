// let rostmi = 1 > 2;

// console.log(rostmi);

// console.log("Bee" > "Be");

// 12330 > 12300

// console.log("02" >= "1");

// console.log(false == 0);

// let a = 0;
// Boolean(a);
// console.log(typeof a); // false

// let b = "0";
// Boolean(b);
// console.log(typeof b); // true

// console.log(a == b); // true!

// console.log("2" !== 2);

// console.log("null: ", typeof null);
// console.log("unde: ", typeof undefined);

// console.log(null == undefined);

//, 2 ==  2

// console.log(null > 0); // (1) false
// console.log(null == 0); // (2) false
// console.log(null >= 0); // (3) true

// console.log(undefined > 0); // false (1)
// console.log(undefined < 0); // false (2)
// console.log(undefined == 0); // false (3)
// console.log(undefined >= 0); // false (3)
// console.log(undefined <= 0); // false (3)
// console.log(undefined === 0); // false (3)
// console.log(undefined !== 0); // false (3)
// console.log(undefined != 0); // false (3)

// 16. 999 dan katta bo'lgan istalgan berilgan. Ushbu sonni bo'lib butunini olish (/) va bo'lib qoldig'ini olish (%) amalari orqali o'nliklar, yuzliklar va mingliklar xonasidagi raqamni topuvchi dastur tuzing.

// 17. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha to'liq minut o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab to'liq 205 minut degani.

// 18. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha soat va sekund o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab 3 soat 25 min 21 sekund degani.

// console.log("16-misol");

// let a = Number(prompt("999 dan katta son kiriting:"));

// let onlik = null,
//   yuzlik = null,
//   minglik = null;

// let birlik = a % 10;
// onlik = ((a - birlik) / 10) % 10;
// yuzlik = ((a % 1000) - (a % 100)) / 100;
// minglik = ((a % 10000) - (a % 1000)) / 1000;
// console.log(onlik);
// console.log(yuzlik);
// console.log(minglik);

// 15691;
// 9;
// 6;
// 5;

// console.log("17-misol");

// let sekund = Number(prompt("sekundni kiriting: "));

// let minut = null;

// minut = (sekund - (sekund % 60)) / 60;

// console.log(minut);
// let minutWhile = 0;

// while sekund > 60
//   sekund -= 60;
//   ++minutWhile;

// console.log(minutWhile);

// console.log("18-misol");

// let input = Number(prompt("sekundni kiriting: "));

// let soat, minut, sekund;

// sekund = input % 60;
// soat = (input - (input % 3600)) / 3600;
// minut = (input - soat * 3600 - sekund) / 60;

// console.log(`${soat}:${minut}:${sekund}`);

// let cola = prompt("a = ");
// let fanta = prompt("b = ");
// let bonka;

// bonka = cola;
// cola = fanta;
// fanta = bonka;

// console.log(cola);
// console.log(fanta);

// a = +a * +b;
// b = +a / +b;
// a = +a / +b;
// console.log(a);
// console.log(b);

console.log("shart operatori");
// 10<son<100 ; ikkilanganini qaytarinf
// 100<=son<999; yarmini qataring
// 0<son<10; sonni 10 ga ko'paytirib chiqaring

let son = 4;

if (son < 100 && son >= 10) {
  son *= 2;
} else if (son <= 999 && son > 99) {
  son /= 2;
} else if (son < 10) {
  son *= 10;
} else {
  console.log(" odam tushunmaydigan son");
}

console.log(son);
