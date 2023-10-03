//ternar operatori

// let a = 5;

// if (a > 0) {
//   console.log("if else salom");
// } else {
//   console.log(" if else hayr");
// }

// a > 0 ? console.log("ternarda salom") : console.log(" ternarda hayr");

// shart ? togrilikdagi_natija : aks_holdagisi

// let a = 4;

// if (a == 1) {
//   console.log("1 ga teng");
// } else if (a == 2) {
//   console.log("2ga teng");
// } else if (a == 3) {
//   console.log("3ga teng");
// } else {
//   console.log("hech qaysi biriga teng emas");
// }

// a == 1
//   ? console.log("1 ga teng")
//   : a == 2
//   ? console.log("2ga teng")
//   : a == 3
//   ? console.log("3ga teng")
//   : console.log("hech qaysi biriga teng emas");

// for (let i = 1; i <= 10; i++) {
//   console.log("salom" + i);
// }

// let i = 0;
// while (i < 1000) {
//   // code// so-called "loop body"
//   console.log("salom" + i);
//   i++;
// }

// let i = 5;
// while (i) {
//   console.log(i--);
// }

// // let i = 3;
// while (i) {
// 	// when i becomes 0, the condition becomes falsy, and the loop stops
// 	alert( i );
//   i--;
// // }

// do {
//   // loop body
// } while (condition);

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 3);

// for (let i = 0; i > 10; i++) {
//   console.log("slaom" + i + 1);
// }
// let i = 0;

// for (;  ) {
//   console.log(i); // 0, 1, 2
//   i++;
// }
// console.log(i); // error, no such variable

// let i = 0;
// for (; i < 10; ) {
//   console.log("salom i");
//   i++;
// }

// let k = 0;
// while (k < 10) {
//   console.log("salom k");
//   k++;
// }

// let i = 0;
// while (true) {
//   console.log("salom" + i);
//   if (i == 10) break; // (*)
//   i++;
// }
// // console.log("Overall Sum: " + sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   alert(i);
// }

// for (let i = 0; i < 10; i++) {
//     (i > 5) ? alert(i) : continue; // continue isn't allowed here
// }

// outer: for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, ""); // what if we want to exit from here to Done (below)?
//     if (!input) {
//       continue outer;
//     }
//   }
// }
// alert("Done!");

// let str = "salom";
// console.log(str[1] == "a");
