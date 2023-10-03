const string = "Lorem, ispumm dolor sit amet";
let arr = string.split(" ");
console.log(arr); // ["Lorem,", "ipsumm", "dolor", "sit", "amet"]

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

let newMassiv = massiv.map(() => {});

function camelize(a) {
  let camelizedString = null;
  /* code */
  return camelizedString;
}

//////////////////////////////////////////

function unique(arr) {
  /* code */
}
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
alert(unique(strings)); // Hare, Krishna, :-O

//////////////////////////////////////////

// let foo = (a) => {
//   if (a.length >= 1) {
//     return a[0] === 6 || a[a.length - 1] === 6;
//   } else return false;
// };

function nomi() {
  console.log("funksiya chaqirildi");
}

// let nomi = () => {
//   return 0;
// };

// let nomi = function () {
//   return 0;
// };
// nomi();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let soz = "background-color";

let massiv = soz.split("-").map((el, i) => {
  if (i != 0) {
    return el[0].toUpperCase() + el.slice(1);
  }
  return el;
});
console.log(massiv.join(""));
