// // switch("1") {
// // 	case 1:  // if (x === 'value1')...[break]
// // 	case 'value2':  // if (x === 'value2')...[break]
// // 	default:...[break]
// // }

// let x = +prompt("Sonni kiritings");

// switch (x) {
//   case 2:
//     console.log("ikki");
//     break;
//   case 1:
//     console.log("Bir");
//     function foo() {}
//     foo();
//     break;
//   case 3:
//     console.log("uch");
//     break;
//   default:
//     console.log("bundna son yo'q");
//     break;
//   case 123:
//     console.log("bir yuz yigirma uch");
//     break;
//   case 4:
//     console.log("to'rt");
//     break;
// }

// function menu() {
//   let a = +prompt(
//     "1. Testni boshlash\n2. Test qo'shish\n3. Testni tahrirlash\n4. Aloqa\n 0. Chiqish"
//   );
//   switch (a) {
//     case 1:
//       startTest();
//       break;
//     case 2:
//       addTest();
//       break;
//     case 3:
//       console.log("Testni tahrirlash");
//       break;
//     case 0:
//       console.log("chiqildi");
//       break;
//     default:
//       console.log("Menunu tanlang");
//       break;
//   }
// }

// menu();

// function startTest() {
//   console.log("TTest boshlandi");
// }

// function addTest() {
//   console.log("test qo'shish funksiyasi chaqirildi");
// }

// if (shart) {
//   // shart  true bo'lsa bajariladi
//   tanasi;
// }

// let a = prompt("Sonni kiriting");
// if (a > 1 && a < 10) {
//   birXOnalisonustidaamalBajaradi();
// } else {
//   console.log("1 xonali son kiriiting");
// }

// if (a > 10 && a < 100) {
//   console.log("2 xonasli son");
// }

// if (a > 100 && a < 1000) {
//   console.log("3 xonasli son");
// }

// function birXOnalisonustidaamalBajaradi() {
//   console.log(
//     "1 xonasli son,. birXOnalisonustidaamalBajaradi funksiya chaqirildi"
//   );
// }

// let smartCopilka = +prompt("Tangani tashlang");

// let kopilkadagiUmumiySumma = 0;

// if (smartCopilka == 100) {
//   console.log("100 so'm tashlandi");
//   kopilkadagiUmumiySumma += smartCopilka;
//   function foo() {}
//   foo();
// } else if (smartCopilka == 200) {
//   console.log("200 so'm tashlandi");
//   kopilkadagiUmumiySumma += smartCopilka;
// } else if (smartCopilka == 500) {
//   console.log("500 so'm tashlandi");
//   kopilkadagiUmumiySumma += smartCopilka;
// } else if (smartCopilka == 1000) {
//   console.log("1000 so'm tashlandi");
//   kopilkadagiUmumiySumma += smartCopilka;
// } else {
//   console.log("tangani bittalab tashlang , hisobda adashish mumkin");
// }

// console.log(kopilkadagiUmumiySumma + " kopilkada shuncha pulingiz bor");

// function foo() {} // function declaration;

// let foo = function () {}; // function expression;

// let foo = () => {}; // Arrow function;

// new Function(arg1, arg2, "return arg1 + arg2"); // function constructor;

// foo() /// funckisya bor

// foo();

// let foo = function () {
//   console.log("funksiya chaqirildi");
// };

// function funksiyaNomi(arg1, arg2, ...argN) {}

// let a = document.querySelector("ul .foo");
// let b = document.querySelectorAll("div");
// let c = document.getElementById("joo");
// let d = document.getElementsByClassName("list");
// let e = document.getElementsByTagName("div");
// console.log(b);
// b.innerText = "<h1>salom</h1>";
// function changeColor() {
//   b.style.color = "red";
//   b.style.transform = "translate(0, 400px)";
// }

// console.log(b.innerHTML);

// let belgi = prompt("Belgi kiriting: ");

// switch (true) {
//   case belgi >= 'A' && belgi <= 'Z':
//     alert("Katta harf");
//     break;
//   case belgi >= 'a' && belgi <= 'z':
//     alert("Kichik harf");
//     break;
//   case belgi >= '0' && belgi <= '9':
//     alert("Raqam");
//     break;
//   default:
//     alert("Belgi");
//     break;
// }

// let mahsulotlar = [
//   { nomi: "Olma", narxi: 5000 },
//   { nomi: "Anor", narxi: 7000 },
//   { nomi: "Shaftoli", narxi: 6000 },
//   { nomi: "Nok", narxi: 4000 },
// ];
// console.log("Mahsulotlar ro'yxati:");
// for (let i = 0; i < mahsulotlar.length; i++) {
//   console.log(${i + 1}. ${mahsulotlar[i].nomi} - ${mahsulotlar[i].narxi} so'm);
// }
// let tanlov = prompt("Buyurtma uchun mahsulot raqamini kiriting:");
// let tanlanganMahsulot = mahsulotlar[tanlov - 1];
// let buyurtmaSoni = prompt("Buyurtma sonini kiriting:");
// let umumiyNarx;
// switch (tanlov) {
//   case "1":
//   case "2":
//   case "3":
//   case "4":
//     umumiyNarx = tanlanganMahsulot.narxi * buyurtmaSoni;
//     console.log(Tanlangan mahsulot: ${tanlanganMahsulot.nomi});
//     console.log(Buyurtma soni: ${buyurtmaSoni});
//     console.log(Umumiy narx: ${umumiyNarx} so'm);
//     break;
//   default:
//     console.log("Noto'g'ri tanlov");
//     break;
// }

// let products = ["olma", "anor", "shaptoli", "qoqi"];
let umumiySumma = 0;

tugash: while (true) {
  let n = +prompt(
    "1. Olma, \n2.Anor\n3.Behi\n4.Shaptoli\n 0. Bozordan chiqish"
  )[0];
  switch (n) {
    case 1:
      umumiySumma += 15000;
      break;
    case 2:
      umumiySumma += 25000;
      break;
    case 3:
      umumiySumma += 18000;
      break;
    case 4:
      umumiySumma += 45000;
      break;
    case 0:
      break tugash;
    default:
      alert("bunday maxsulot yo'q");
  }
}

alert("Umumiy summa :" + umumiySumma);
