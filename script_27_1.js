function funksiyaNomi() {
  console.log("hello");
}

// funksiyaNomi();

// let a, b;
// a = 5;
// b = 6;

// console.log(a + b); // 11

function add(a = 0, b = 0) {
  let k = a + b * a - ((b / a) * a) / b;
  return k;
}

let num1 = 5; // 7 // 8 // 123
let num2 = 6; /// 3245 /// 456 //9

let natija2 = add(num1, num2);

// console.log(natija2 * 3);
// console.log(natija);

// 454+34543*324234+43353-4323= chiqdi, chiqmadi

// let son = +prompt("sonni kiriting");
let count = 0;

function raqamSoni(son) {
  return String(son).size;
}
// console.log(raqamSoni(son));

function diffirenceDigits(n) {
  let sum = 0;
  let product = 1;
  while (n != 0) {
    sum += n % 10;
    product *= n % 10;
    n = (n - (n % 10)) / 10;
  }
  return product - sum;
}

let number = +prompt("Sonni kiriting");
console.log(diffirenceDigits(number));

let elements = document.getElementsByClassName("user-info");
let data = [];
for (let i = 0; i < elements.length; i++) {
  let pInfo = elements[i].querySelectorAll("p");
  let name = pInfo[0].textContent;
  let ball = pInfo[1].textContent;
  let userName = elements[i].querySelector("a").textContent;
  let obj = {
    ball,
    userName,
    name,
  };
  data.push(obj);
  // Endi, olingan ma'lumotlarni ishlatishingiz mumkin
}
data.sort(function (a, b) {
  return b.ball - a.ball; // 'ball' bo'yicha teskari tartiblash
});

console.log(data);

function captain(number1, number2) {
  let son1 = number1 * number1;
  let son2 = number2 * number2;

  return son1 + son2;
}

let a = prompt("");
let b = prompt("");
alert(captain(a, b));
