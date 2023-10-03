// let a;
// let b;

// [a, b] = [4, 7];

// console.log(a); //6
// console.log(b); //5

// let firstName;
// let surname;

// let [firstName, surname] = ["John", "Smith"];

// alert(firstName); // John
// alert(surname); // Smith

// let [firstName, title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(firstName);
// console.log(title);

// let [a, b, c] = "abc".split(""); // ["a", "b", "c"]
// console.log(a);
// console.log(b);
// console.log(c);

// let [one, two, three] = new Set([1, 2, 3]);

// console.log(one);
// console.log(two);
// console.log(three);

// let [name1, name2, ...MMMMMM] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(name1); // Julius
// console.log(name2); // Caesar

// console.log(MMMMMM);

// let [firstName = "d1", surname = "d2"] = ["bor"];

// console.log(firstName); //
// console.log(surname); //

// // function foo(a, b=5) {
// //     return a+b;
// // }
// // foo(3);

// let [name = prompt("name?"), surname = prompt("surname?")] = [];

// console.log(name); // Julius (from array)
// console.log(surname); // whatever prompt gets

// let options = {
//   title: "Menu",
//   height: 100,
// };

// let { width = 100, height: balandlik, title } = options;

// console.log(balandlik); //

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
// };

// // title = property named title
// // rest = object with the rest of properties
// let { title, ...rest } = options;

// // now title="Menu", rest={height: 200, width: 100}
// console.log(rest); // 200
// // console.log(rest.width); // 100

// // {title, name} = {"John", "Bro"}

// let {
//   size: { width, height },
//   items: [item1, item2],
//   title = "Menu",
// } = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
//   title: "TITLE",
// };

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

// let a = [1, 2, 343, 54, 4];
// let b = [45, 6785, a];
// console.log(b);

// solutions.xyzMiddle = function xyzMiddle(str) {
//   if (str.length < 3) return false;

//   let start1 = str.length / 2 - 2;
//   let start2 = str.length / 2 - 1;

//   if (str.length % 2 == 0) {
//     return (
//       str.substring(start1, start1 + 3) == "xyz" ||
//       str.substring(start2, start2 + 3) == "xyz"
//     );
//   }

//   return str.substring(start2, start2 + 3) == "xyz";
// };
