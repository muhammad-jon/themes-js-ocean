// console.log(yozuv[3]); /// hello

function passwordCheck(yozuv) {
  let hasUppercaseLetter = false;
  let hasLowercaseLetter = false;
  let hasChars = false;
  let hasNumbers = false;
  let answer = "";
  if (yozuv.length >= 8) {
    for (let i = 0; i < yozuv.length; i++) {
      if (yozuv[i].charCodeAt(0) >= 65 && yozuv[i].charCodeAt(0) <= 90) {
        hasUppercaseLetter = true;
      } else if (
        yozuv[i].charCodeAt(0) >= 97 &&
        yozuv[i].charCodeAt(0) <= 122
      ) {
        hasLowercaseLetter = true;
      } else if (yozuv[i].charCodeAt(0) >= 48 && yozuv[i].charCodeAt(0) <= 57) {
        hasNumbers = true;
      } else {
        hasChars = true;
      }
    }

    if (hasUppercaseLetter) {
      answer += "Katta harf ";
    } else {
      answer += "";
    }
    hasLowercaseLetter ? (answer += " Kichik harf ") : (answer += "");

    hasNumbers ? (answer += " Son ") : (answer += "");
    hasChars ? (answer += "Belgi ") : (answer += "");
    answer += "lardan foydalanilgan";
  } else {
    answer += "8 ta belgidan uzunroq parol yozing";
  }
  return answer;
}

let matn1 = "ali";
let matn2 = "la La lla";

console.log("Matn 1 uchun: ");

document.getElementById("header").innerText = passwordCheck(matn1);

console.log("Matn 2 uchun: ");
console.log(passwordCheck(matn2));

// let a = 35;
// let b = 78;
// let natija = a + b;
// console.log(natija);

// function add(aParametr, bParametr) {
//   return aParametr + bParametr;
// }

// let a = 113;

// console.log(a * 2 - 49);

// add(2, 90);
// add(123, 76);

// function calcAdd() {
//   let firstNumber = document.getElementById("firstNumber");
//   let secondNumber = document.getElementById("secondNumber");
//   let answer = +firstNumber.value + +secondNumber.value;

//   document.getElementById("natija").innerText = answer;
// }

// function ortaArifmetik(a, b, c) {
//   return (a + b + c) / 3;
// }

// let a;
// let b;
// let c;

// let ortaArif = (a + b + c) / 3;
// console.log(ortaArif);

// console.log(document.getElementsByTagName("p")[0].innerText.split(" ")[1]);

// let stop = true;
// let ball = 0;
// let maxBall;
// let minBall;

// do {
//   ball = +prompt("Bahoni kiriting:");
//   if (ball == 9) {
//     break;
//   }
//   if (!(maxBall || minBall)) {
//     maxBall = ball;
//     minBall = ball;
//   }
//   if (maxBall < ball) {
//     maxBall = ball;
//   }
//   if (minBall > ball) {
//     minBall = ball;
//   }
// } while (true);

// console.log(maxBall);
// console.log(minBall);

//   *
//  * *
// * * *
//* * * *

//* * * *
//* * * *
//* * * *
//* * * *

// console.log("* \t* \t* \t*");
// console.log("* \t* \t* \t*");
// console.log("* \t* \t* \t*");
// console.log("* \t* \t* \t*");
// let count = 5;

// for (let i = 1; i <= count; i++) {
//   let a = "";

//   for (let j = count - i; j > 0; j--) {
//     a += " ";
//   }
//   a += " *";

//   for (let j = 0; j < i; j++) {
//     a += "  ";
//   }
//   a += " *";
//   console.log(a);
// }
// for (let i = count - 1; i >= 0; i--) {
//   let a = "";
//   for (let j = count - i; j > 0; j--) {
//     a += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     a += " *";
//   }

//   console.log(a);
// }

// function romb(n, pattern) {
//   for (let i = 1; i <= n; i++) {
//     let a = "";
//     for (let j = n; j > i; j--) {
//       a += "  ";
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//       if (k === 0 || k === 2 * i - 2) {
//         a += `${pattern}`;
//       } else {
//         a += "  ";
//       }
//     }
//     console.log(a);
//   }
//   for (let i = 1; i <= n - 1; i++) {
//     let a = "";
//     for (let j = 0; j < i; j++) {
//       a += "  ";
//     }
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         a += `${pattern}`;
//       } else {
//         a += "  ";
//       }
//     }
//     console.log(a);
//   }
// }

// romb(5, "O");
