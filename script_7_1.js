// 6. Foydalanuvchidan belgi olib, u katta harf,
// kichik harf yoki raqam ekanligini switch-case
//ifodasi yordamida tekshiruvchi dastur yaratish.

// let text = prompt("Belgi kiriting");
// let unicodeIndex = text.charCodeAt(0);
// console.log(unicodeIndex);

// if (unicodeIndex >= 65 && unicodeIndex <= 90) {
//   console.log("katta xarf");
// } else if (unicodeIndex >= 97 && unicodeIndex <= 122) {
//   console.log("kichik xarf");
// } else if (unicodeIndex >= 48 && unicodeIndex <= 57) {
//   console.log("sonlar ");
// } else {
//   console.log("belgilar ");
// }

//

//

// switch (unicodeIndex >= 48 && unicodeIndex <= 57) {
//   case true:
//     console.log("sonlar ");
//     break;
//   default:
//     switch (unicodeIndex >= 65 && unicodeIndex <= 90) {
//       case true:
//         console.log("katta xarf");
//         break;
//       default:
//         switch (unicodeIndex >= 97 && unicodeIndex <= 122) {
//           case true:
//             console.log("kichik xarf");
//             break;
//           default:
//             console.log("belgilar ");
//         }
//     }
// }

// switch (true) {
//   case unicodeIndex >= 97 && unicodeIndex <= 122:
//     console.log("kichik harf");
//     break;
//   case unicodeIndex >= 65 && unicodeIndex <= 90:
//     console.log("katta harf");
//     break;
//   case unicodeIndex >= 48 && unicodeIndex <= 57:
//     console.log("sonlar");
//     break;
//   default:
//     console.log("belgilar");
//     break;
// }

// let kichik_Chek = unicodeIndex >= 97 && unicodeIndex <= 122;
// let katta_check = unicodeIndex >= 65 && unicodeIndex <= 90;

// switch (kichik_Chek) {
//   case true:
//     console.log("kichik harf");
//     break;
// }

// switch (katta_check) {
//   case true:
//     console.log("katta harf");
//     break;
// }

//

// (a = 1), (b = 2), (c = 1);

// (a = 2), (b = 1), (c = 2);

// (a = 3), (b = 0), (c = 1);

// Lorem ipsum dolor sit amet consectetur,
// adipisicing elit. Ipsa, minus in animi
// similique expedita non. Recusandae esse
// magni a corrupti facilis? Ut laboriosam
// voluptatibus amet delectus consequuntur
// laudantium inventore sint voluptas dolore.
// Ea culpa, expedita, excepturi necessitatibus,
// quidem repellat dignissimos consequatur sunt
// quisquam dolores magni possimus eum est hic
// neque consequuntur voluptate impedit itaque?
// Necessitatibus accusamus possimus, itaque
// maiores quo ratione voluptates commodi unde
// natus culpa corrupti veritatis labore dolor
// explicabo soluta doloremque ipsa quos, sint
// architecto sed at? Commodi, iste ex totam
// recusandae temporibus eos nobis quaerat dolor
// rem laboriosam? Fuga maxime debitis, nihil
// doloribus sequi quidem iure iusto!

// function showMessage() {
//   alert("Hello everyone!");
// }

// function funcName(a, b, c) {
//   let natija = a + b / c - a * b * c - (a * c) ** (1 / 2);
//   console.log(natija);
// }

// funcName(1, 3, 5);
// // (a = 1), (b = 2), (c = 1);

// funcName(2, 1, 2);
// // (a = 2), (b = 1), (c = 2);

// funcName(3, 0, 1);
// // (a = 3), (b = 0), (c = 1);

// function biography(ismi = "FIO", yoshi = 19, jinsi) {
//   console.log(
//     `${ismi} uning yoshi ${yoshi}, ${jinsi ? `jinsi ${jinsi}:` : ""}`
//   );
// }

// biography("Muhammad");
// biography("Mansur", 18);
// biography("Mahmud");
// biography("Asadbek");
// biography("Rasulbek", 20);

// biography(null);

// biography("Palonchi", 6, "erkak");

// let a = 3;
// let b = 9;
// console.log(a);

// function foo(a, b) {
//   a = a + 23; // 57
//   console.log(a + b);
// }
// let a = 34;
// foo(a, 9);

// console.log(a);

// function anotherFunction() {
//   return "Hello";
// }

// function showMessage(from, text) {
//   if (text == undefined) {
//     text = "Hello";
//   }
//   // anotherFunction() only executed if no text given
//   // its result becomes the value of text
//   console.log(from, text);
// }
// showMessage("Muhammad", "hi");

// function showMessage(from, text) {
//   // If the value of text is falsy, assign the default value// this assumes that text == "" is the same as no text at all
//   text = text || "no text given";
//   console.log(from + text);
// }

// showMessage("Muhammad ", "hi");

// function showCount(count) {
//   // if count is undefined or null, show "unknown"
//   console.log(count ?? "unknown");
// }
// showCount(0); // 0
// showCount(12); // 0
// showCount(false); // 0
// showCount(""); // 0
// showCount(null); // unknown
// showCount(); // unknown

////////////////////////

// function saytingjavobi() {
//   console.log("saytning javobi ishladi");
//   return 2;
// }
// function bizningjavob() {
//     console.log("bizning javob ishladi");
//     return 2;
//   }

// console.log(bizningjavob() * saytingjavobi());

// let b = bizningjavob();

// let a = saytingjavobi();

// let c = 12;

// console.log(c);
