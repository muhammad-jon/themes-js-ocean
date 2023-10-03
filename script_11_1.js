// eng kichik juft karrali

let son = 234.01; //42

// 4000001; // 810; // 80002

function engKichikKarrali(son) {
  let karrali = null;
  for (let i = Math.floor(son); i <= son * 10 ** String(son).length; i++) {
    if ((i / son) % 1 == 0 && i % 2 == 0) {
      karrali = i;
      break;
    }
  }
  return karrali;
}

function engKichikKarrali2(son) {
  let butunSon = son;
  if (son > Math.floor(son)) {
    let butunXonalariSoni = String(Math.floor(son)).length;
    let xonalariSoni = String(son).length;
    let qoldiqXonalari = xonalariSoni - butunXonalariSoni - 1;
    butunSon = Math.ceil(son * 10 ** qoldiqXonalari);
  }

  if (butunSon % 2 == 0) {
    return butunSon;
  } else return butunSon * 2;

  // 0.03 = 2;
  // 4.03 * 10 ^ 2; = 403;
  // agar 403 toq bo'lsa ikkilangani
  // aks holda sonning o'zi;
}
// console.log(engKichikKarrali(son));
// console.log(engKichikKarrali2(son));

// let massiv = ["matn", 45, "*", 56, true, 89];
// // let massivCPP = [45, 324, 5, 27, 0];
// console.log(massiv);
// for (let i = 0; i < 6; i++) {
//   console.log(massiv[i]);
// }

// let formap = [30, 56, 9, 90, 12];
// let aftermap = formap.map((el, i) => {
//   if (i % 2 == 0) {
//     return el + 12;
//   } else {
//     return el - 12;
//   }
// });
// console.log(formap);
// console.log(aftermap);

// let forfilter = [30, 56, 9, 90, 12];
// let afterfillter = forfilter.filter((el) => el % 2 == 0);
// console.log(forfilter);
// console.log(afterfillter);

// let alpha = ["b", "k", "a", "c"];

// console.log(alpha.sort());
let ism = "Lorem ipsum, dolor sit, amet";
console.log(ism.split(","));

// let harf = ["a", "z", "a", "m", "a", "t"];

// console.log(harf.join(" salom "));
