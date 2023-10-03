// 0 1 1 2 3 5 8 13 21 34 ...
// a b c
//   a b c
//     a b c

// c = a + b

// let a = 0;
// let b = 1;
// let c = a + b;

// do {
//   console.log(c);
//   a = b;
//   b = c;
//   c = a + b;
// } while (c < 100);

// console.log(Math.round(Math.random() * 3) + 7);

// let a = 145.5;
// console.log(a);
// console.log(Math.floor(a)); // xaridorga foyda
// console.log(Math.ceil(a)); // sotuvchiga foyda
// console.log(Math.round(a)); // ikkala tomonga foyda

// Math.floor() // sonning eng past qiymatini
// Math.ceil() // sonning eng yuqori qiymati
// Math.round() //sonning yaxlitlanganini qaytaradi

// let a = Math.round(Math.random() * (76 - 23) + 23);
// console.log(a);
// (23; 76)

// let min = +prompt("min: "); //10
// let max = +prompt("max: "); //20
// let minNumber = min;
// let maxNumber = max;

// let numberFound = false;
// let count = 0;

// while (!numberFound) {
//   count++;
//   let randomSon = Math.round(Math.random() * (max - min) + min);
//   numberFound = confirm(randomSon + " sonini o'yladingizmi?");
//   if (numberFound) {
//     alert(`Kompyuter sonni ${count} urinishda topdi`);
//     break;
//   }
//   let choosenNumber = +prompt(
//     `1. Men o'ylagan son ${randomSon} dan katta \n2. Men o'ylagan son ${randomSon} dan kichik `
//   );
//   if (choosenNumber == 1) {
//     min = randomSon + 1;
//   } else if (choosenNumber == 2) {
//     max = randomSon - 1;
//   }
// }

// let counter = 0;

// let lapTopRandomizedNumber = Math.round(
//   Math.random() * (maxNumber - minNumber) + minNumber
// );

// while (true) {
//   counter++;
//   let number = +prompt(
//     `Kompyuter o'ylagan (${minNumber}, ${maxNumber}) oraliqdagi sonni toping:`
//   );
//   let iFoundNumber = number == lapTopRandomizedNumber;
//   if (iFoundNumber) {
//     alert(`Sonni ${counter} ta urinishda topdingiz, tabriklaymiz!`);
//     break;
//   }
//   if (number > lapTopRandomizedNumber && number < maxNumber) {
//     maxNumber = number;
//   } else if (number < lapTopRandomizedNumber && number > minNumber) {
//     minNumber = number;
//   }
// }

// if (count > counter) {
//   alert("Tabriklaymiz siz kampyuterni yutdingiz!");
// } else if (count < counter) {
//   alert("AFSUSKI  yutqizdingiz!");
// } else {
//   alert("Durang");
// }

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// switch(x) {
// 	case 'value1':  // if (x === 'value1')...[break]
// 	case 'value2':  // if (x === 'value2')...[break]
// 	default:...[break]
// }

// let a = 5; //4
// switch (a) {
//   case 3:
//   case 4:
//     alert("Exactly! switch");
//     break;
//   case 5:
//     alert("Too big switch");
//     break;
//   default:
//     alert("I don't know such values");
// }

// if (a == 3 || a == 4) {
//   alert("Exactly! if");
// } else if (a == 5) {
//   alert("Too big if");
// }

// let a = 3;
// switch (a) {
//   case 3:
//     alert("Too small");
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
//     break;
// }

// let a = "1";
// let b = 0;
// switch (+a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;
//   default:
//     alert("this doesn't run");
// }

// let soz = "nok";
// switch (soz) {
//   case "shaptoli":
//     console.log("Persik");
//     break;
//   case "nok":
//     console.log("Grusha");
//     break;
//   default:
//     console.log("Lug'atda bunaqa so'z mavjud emas");
// }
