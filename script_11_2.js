let KiruvchiSon = 122.5; // 90210;
// console.log(345 % 1);

function juftKarrali(son) {
  let karrali = son;
  if (son - Math.floor(son) > 0) {
    let sonUzunligi = String(son).length;
    let qoldiquzunligi = sonUzunligi - String(Math.floor(son)).length - 1;
    karrali = Math.ceil(son * 10 ** qoldiquzunligi);
    if (karrali % 2 == 0 && qoldiquzunligi > 1) {
      return karrali;
    } else if (qoldiquzunligi > 1) return 2 * karrali;
  }

  //   console.log(2010 % son);

  //   console.log(0.2 + 0.1);

  for (let i = Math.floor(son); i <= karrali * 2; i++) {
    // console.log(i % son);
    // console.log(i);
    if (i % son == 0) {
      if (i % 2 == 0) {
        return i;
      } else return 2 * i;
    }
  }
}

// console.log(juftKarrali(KiruvchiSon));

// uzunligini topdik, 7 = String(son).length;

// uzunlikdan 7 - String(Math.floor(son)).length - 1 = 3

// son * 10**3 => 345002;

// 3 => 6
// 3.5 => 14

function zarik(a) {
  return 7 - a;
}

function yangiyil(a, b, c, umumiy) {
  return umumiy < a + b + c;
}
// console.log(yangiyil(145, 67, 23, 178));

function niqob(n, niqoblarSoni) {
  return Math.floor(niqoblarSoni / n);
}

// let massiv = [34, true, [56, "matn"], { ism: "M", rostmi: true }, "matn"];
// string massivCPP = ["MATN", "45", "true"];

// console.log(massiv.length);
// console.log(massiv[3]);

let sonlar = [23, 45, 7, 16, 0, 91234];

// console.log(sonlar);

// for (let i = 0; i < sonlar.length; i++) {
//   console.log(sonlar[i]);
// }

// let afterMap = sonlar.map((el, index) => {
//   if (el % 8 == 0) {
//     return el + 10;
//   } else {
//     return el;
//   }
// });

// console.log(afterMap);

// let filterArr = sonlar.filter((el) => el > 20);
// console.log(filterArr);

// let words = ["flower", "bear", "chocolate", "butterfly", "car"];
// console.log(words);
// console.log(words.sort());

// words.forEach((el) => {
//   console.log(el + " ABS");
// });

let b = [10, 20, 30, 40, 50, 60];
// let newmassiv = a.concat(b);
// console.log(newmassiv);
// console.log(a);
// console.log(b);

// let kattami5 = a.every((el) => el > 0);
// console.log(kattami5);
// let kattami5 = a.some((el) => el < 0);
// console.log(kattami5);

// console.log(a.includes(5));

// let matn = "lorem ipsum, dolor. sit, amet";

// console.log(matn.split("o"));

// let ism = [12, 45, "45", "m", 12, "t"];

// console.log(ism.join(" "));

// let natija = ism.reduce((el, el2) => el + el2);

// console.log(natija);

let a = [1, 12, 3, 4, 5, 6, 7, 8, 9, 10];

// let index = a.find((el) => el > 7);

console.log(a.indexOf(78));
