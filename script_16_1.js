// let arr = ["John", "Smith"];
// let [firstName, surname] = arr;

// // [firstName, surname] = ["John", "Smith"];

// console.log(firstName);
// console.log(surname);

// // second element is not needed
// let [firstName, , , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(title); // Consul

// let [a, b, c] = "abc"; // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);

// let set = new Set([1, 2, 3, 3, 1]);

// console.log(set);

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(one);
// console.log(two);
// console.log(three);

// let user = {};

// // user.name = "John";
// // user.surname = "Smith";

// [user.name, user.surname] = ["John", "Smith"];
// // "John Smith".split(' ');

// // [user.name, user.surname] = "John Smith".split(' ');

// console.log(user.name); // John
// console.log(user.surname); // Smith

// let user = {
//   name: "John",
//   age: 30,
// };

// // loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for (let [key, value] of user) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// let [name1, name2, ...abs] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(name1); // Julius
// console.log(name2); // Caesar
// console.log(abs);

// function foo(a, b=45){
//     return a+b;

// }

// foo(23);//

// default values
// let [name="Guest", surname="Anonymous"] = ["Julious"];

// console.log(name); // Julius (from array)
// console.log(surname); // Anonymous (default used)

// let [name = prompt("name?"), surname = prompt("surname?")] = [];

// console.log(name); // Julius (from array)
// console.log(surname); // whatever prompt gets

// // let {var1, var2} = {var1:…, var2:…}
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { height: balandlik, width, title } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(balandlik); // 200

// let options = {
//   title: "Menu",
// };

// let { width = 100, height = 200, title } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {};

// let { width = prompt("width?"), title = prompt("title?") } = options;

// console.log(title); // Menu
// console.log(width); // (whatever the result of prompt is)

// let options = {
//   title: "Menu",
// };

// let { width: kenglik = 100, height: balandlik = 200, title } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
// };

// // title = property named title
// // rest = object with the rest of properties
// let { title, ...rest } = options;

// // console.log(title);
// // now title="Menu", rest={height: 200, width: 100}
// console.log(rest.height); // 200
// console.log(rest.width); // 100

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item2, item1],
//   title = "Menu",
// } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

// console.log(items);

// we pass object to function
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };

// function showMenu({
//   title = "Untitled",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   console.log(`${title} ${width} ${height}`); // My Menu 200 100
//   console.log(items); // Item1, Item2
// }

// showMenu(options);

// let p = document.getElementById("p");
// let a = p.textContent;

// let newArr = a.split(" ");
// console.log(newArr);
// let result = "";
// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i].length == 8) result += `<mark>${newArr[i]}</mark> `;
//   else result += `${newArr[i]} `;
// }

// console.log(p);
// console.log(result);
// document.getElementById("p1").innerHTML = result;

function plusOut(str, word) {
  let arr = str.split(word);

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arr2 = new Array(arr[i].length);
    arr2.fill("+");
    newArr.push(arr2.join(""));
  }

  return newArr.join(word);
}

// ["12", "34"]
// [+,+], [+,+]
// ["++", "++"];

plusOut("12xy34", "xy");
