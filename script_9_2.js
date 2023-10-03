// 3. Doiraning uzunligi L berilgan.
// Uning radiusi R va yuzasi S ni topuvchi daastur tuzing.

// l = 2*pi*r
// r = l/(2*pi);
// S= pi * r *r;

// const pi = Math.PI;
// console.log(pi);

// function yuza(r) {
//   return pi * r * r;
// }

// function radius(l) {
//   return l / (2 * pi);
// }

// let uzunlik = prompt("Aylana uzunligini kiriting: ");

// let rad = radius(uzunlik);

// let surface = yuza(rad);

// console.log("Aylana radiusi: " + rad + "\nAylana yuzasi: " + surface);

// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *

//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *

for (let index = 0; index < 5; index++) {
  let yulduzcha = "";
  for (let i = 5 - index; i >= 0; i--) {
    yulduzcha += " ";
  }

  for (let j = 0; j < index; j++) {
    yulduzcha += " *";
  }
  console.log(yulduzcha);
}

for (let index = 0; index < 5; index++) {
  let yulduzcha = "";

  for (let j = 0; j <= index; j++) {
    yulduzcha += " ";
  }
  for (let i = 5 - index; i > 0; i--) {
    yulduzcha += " *";
  }
  console.log(yulduzcha);
}
