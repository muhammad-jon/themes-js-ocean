// 6. Foydalanuvchidan belgi olib, u katta harf,
// kichik harf yoki raqam ekanligini switch-case
// ifodasi yordamida tekshiruvchi dastur yaratish.

//

// if (unicodeIndex >= 65 && unicodeIndex <= 90) {
//   console.log("Katta harflar");
// } else if (unicodeIndex >= 97 && unicodeIndex <= 122) {
//   console.log("kichik harflar");
// } else if (unicodeIndex >= 48 && unicodeIndex <= 57) {
//   console.log("raqamlar");
// } else {
//   console.log("belgilar");
// }

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

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

// let kichik_Check = unicodeIndex >= 97 && unicodeIndex <= 122;
// let katta_check = unicodeIndex >= 65 && unicodeIndex <= 90;

// switch (kichik_Check) {
//   case true:
//     console.log("kichik harf");
//     break;
// }

// switch (katta_check) {
//   case true:
//     console.log("katta harf");
//     break;
// }

// function showMessage() {
//   let belgi = prompt("Input char: "); //hello

//   let unicodeIndex = belgi.charCodeAt(0);
//   console.log(unicodeIndex);

//   let kichik_Check = unicodeIndex >= 97 && unicodeIndex <= 122;
//   let katta_check = unicodeIndex >= 65 && unicodeIndex <= 90;

//   switch (kichik_Check) {
//     case true:
//       console.log("kichik harf");
//       break;
//   }

//   switch (katta_check) {
//     case true:
//       console.log("katta harf");
//       break;
//   }
// }

// showMessage();

//   console.log("
//   // Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, minus in animi similique expedita non.
//   // Recusandae esse magni a fdasfds facilis? Ut laboriosam voluptatibus amet delectus consequuntur laudantium
//   // inventore sint voluptas dolore. Ea culpa, expedita, excepturi necessitatibus, quidem repellat dignissimos
//   // consequatur sunt quisquam dolores magni possimus eum est hic neque consequuntur voluptate impedit itaque?
//   // Necessitatibus accusamus possimus, itaque maiores quo ratione voluptates commodi unde natus culpa corrupti
//   // veritatis labore dolor explicabo soluta doloremque ipsa quos, sint architecto sed at? Commodi, iste ex totam
//   // recusandae temporibus eos nobis quaerat dolor rem laboriosam? Fuga maxime debitis, nihil doloribus sequi quidem
//   // iure iusto!");
// let son = 45;

// function info(name, address = "Denov", age = 17) {
//   let son = 64;
//   console.log(son);
//   //   console.log(`Ismi ${name}, yoshi ${age}da, yashash manzili: ${address} `);
// }

// console.log(son);
// // info();

// function showMessage(from, text) {
//   from = "*" + from + "*";
//   console.log("Here", from); // make "from" look nicer
//   alert(from + ": " + text);
// }
// let from = "Ann";
// showMessage(from, "Hello"); // *Ann*: Hello// the value of "from" is the same, the function modified a local copyalert( from ); // Ann
// console.log("Here2", from);

// function showMessage(from, text = "no text given") {
//   alert(from + ": " + text);
// }

// showMessage("Muhammad ");

// function add(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// console.log(add(3, 4) * 2);
